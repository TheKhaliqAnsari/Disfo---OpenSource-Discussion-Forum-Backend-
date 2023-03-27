const Joi = require('joi');
const schema = Joi.object().keys({
    username: Joi.string()
})

const validateQuery = (request, response, next)=>{
    const {username} = request.params;
    
}