const User = require('../models/userModel');
const getToken = require('../createToken');

async function signup(req,res){
    try{
        const {fullname,email,password} = req.body;
        let user = await User.findOne({email});
        if(user){
            res.send("email already exists");
        }
        else{
            await User.create({fullname,email,password});
            res.send("signup success");
        }
    }
    catch(err){
        res.send(err.message);
    }
}

async function login(req,res){
    const {email,password} = req.body;
    let user = await User.findOne({email});
    if(user){
        if(password == user.password){
            let token = getToken(user._id)
            res.send({message:"login success",token});
        }
        else{
            res.status(400).send("Password incorrect");
        }
    }
    else{
        res.status(400).send("oops, guess u haven't signed up!");
    }
}

exports.signup = signup;
exports.login = login;