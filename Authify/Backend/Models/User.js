// here we will make mogodb schemas and gonna connect to database 
const { required } = require('joi');
const mongoose= require('mongoose')
const schemas= mongoose.Schema; 

const userSchemas = new schemas({
    name: {
        type: String, 
        required: true,  // server side validation
    },  

    email: {
      type: String, 
      required: true, 
      unique: true

    }, 

    password: {
        type: String, 
        required: true
    } 
}); 



// MongoDB ke andar "users" naam ka collection banega (ya use hoga)
// Us collection ke documents userSchemas ke rules follow karenge
const userModel = mongoose.model('users', userSchemas); 
module.exports= userModel; 