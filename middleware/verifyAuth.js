const password = process.env.x_api_key;

const verifyAuth = (request, response, next)=>{
    const {x_api_key} = request.headers;
    if(x_api_key && x_api_key===password){
        next();
    }else{
        response.status(403).json( {message: "Unauthorized Access"});
    }
}

module.exports = {
    verifyAuth
}