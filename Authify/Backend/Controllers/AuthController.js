// const User = require("../Models/User");
// const bcrypt= require('bcrypt')
// const jwt= require('jsonwebtoken')

// const signup= async(req, res)=>{
//    try{ 
//       // ye info ab req.body se aayegi (authRouter ke baad chalega)
//       const {name, email, password}= req.body; 
//       const user= await User.findOne({email}); 
//       if(user){
//         return res.status(400).json({message: 'user is already exist, you can login', success: false})
//       }
//       // if not exist then make a new user and put name, email and password 
//       const userModel= new userModel({name, email, password}); 

//       userModel.password= await bcrypt.hash(password, 10) // salt=10

//       await userModel.save(); 
//       res.status(201).json({
//         message: "signup successful",
//         success: true
//       }) 

//    } catch(err){
//         res.status(500).json({
//         message: "interna; server error",
//         success: false
//       })
//    }
// } 



// // now login wala 
// const login= async(req, res)=>{
//    try{ 
//       // ye info ab req.body se aayegi (authRouter ke baad chalega)
//       const {email, password}= req.body; 
//       const user= await userModel.findOne({email}); 
//       const errorMssg= 'Auth failed email or password is wrong'
//       if(!user){
//         return res.status(403).json({message: errorMssg, success: false})
//       }
       
//       const isPasswordequal= await bcrypt.compare(password, user.password); 
//       if(!isPasswordequal){
//         return res.status(403).json({message: errorMssg, success: false})
//       } 

//       // now ab username and password correct hai then we will create jwt token 
//       const jwtToken= jwt.sign({email: user.email, _id: user._id}, 
//           process.env.JWT_SECRET, 
//           {expiresIn: '48h' }
//       )

//       res.status(200).json({
//         message: "login success",
//         success: true,
//         jwtToken, 
//         email, 
//         name: user.name

//       }) 

//    } catch(err){
//         res.status(500).json({
//         message: "internal; server error",
//         success: false
//       })
//    }
// }

// module.exports= {
//     signup,
//     login
// } 

const User = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
   try{ 
      // ye info ab req.body se aayegi (authRouter ke baad chalega)
      const {name, email, password} = req.body; 
      const existingUser = await User.findOne({email}); 
      if(existingUser){
        return res.status(400).json({message: 'user is already exist, you can login', success: false});
      }
      // if not exist then make a new user and put name, email and password 
      const newUser = new User({name, email, password}); 

      newUser.password = await bcrypt.hash(password, 10); // salt=10

      await newUser.save(); 
      res.status(201).json({
        message: "signup successful",
        success: true
      }); 

   } catch(err){
        console.log(err);
        res.status(500).json({
        message: "interna; server error",
        success: false
      });
   }
} 

// now login wala 
const login = async (req, res) => {
   try{ 
      // ye info ab req.body se aayegi (authRouter ke baad chalega)
      const {email, password} = req.body; 
      const user = await User.findOne({email}); 
      const errorMssg = 'Auth failed email or password is wrong';
      if(!user){
        return res.status(403).json({message: errorMssg, success: false});
      }
       
      const isPasswordequal = await bcrypt.compare(password, user.password); 
      if(!isPasswordequal){
        return res.status(403).json({message: errorMssg, success: false});
      } 

      // now ab username and password correct hai then we will create jwt token 
      const jwtToken = jwt.sign({email: user.email, _id: user._id}, 
          process.env.JWT_SECRET, 
          {expiresIn: '48h'}
      );

      res.status(200).json({
        message: "login success",
        success: true,
        jwtToken, 
        email, 
        name: user.name
      }); 

   } catch(err){
        console.log(err);
        res.status(500).json({
        message: "internal; server error",
        success: false
      });
   }
}       

module.exports = {
    signup,
    login
}
