const Users = require('../model/user.model');
const UserService = require('../services/user.service');

const UserServiceInstance = new UserService();

const postUser = async(request, response)=>{
    try{
    const body = request.body;
    console.log(body);
    const result =await UserServiceInstance.create(body);
    response.status(200).json(result);
    }catch(err){
       if(err.index===0){
        response.status(409).json({
            message: "Failed to create new user",
            reason: "Already Exists in DB"
           })
       }else{
        response.status(500).json({message: err.message});
       }
    }
}

const getAllUser = async(request, response)=>{
    try{
     const result = await UserServiceInstance.getAll();
     if(!result.length) response.status(404).json({message: "No Users found"});
     response.status(200).json(result);
    }catch(err){
       res.status(500).json(err);
    }
}

const getUserByUsername = async(request, response)=>{
     const {username} = request.params;

     try{
        const result = await UserServiceInstance.getByUsername(username);
        if(result.length) response.status(200).send(result);
        response.status(404).json({ message: "User not found!", username })
     }catch(err){
        res.send(500).json(err);
     }
}

module.exports = {
    postUser,
    getAllUser,
    getUserByUsername
}