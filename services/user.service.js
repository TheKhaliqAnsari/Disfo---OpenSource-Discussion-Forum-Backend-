const Users = require("../model/user.model");

class UserService{

    save = async (doc)=>{
       return await doc.save();
    }

    create = async (data)=>{
        const newDocument = await new Users(data);
        return await this.save(newDocument);
    }

    getAll = async ()=>{
        return await Users.find({});
    }

    getByUsername = async(username)=>{
        const result = await Users.find({username: username});
        return result;
    }
}

module.exports = UserService;