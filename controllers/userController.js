const { collection } = require("../models/mongodb")

const login = async(req,res) => {
    res.render('index')
}

const signup = async(req,res) => {
    res.render('user-signup')
}

const signupPost = async(req,res) => {
    if(req.body.name.length < 3 && req.body.email.length > 3 && req.body.password.length > 3) {
        res.render('user-signup',{message:"Please fill all the items"})
    } else {
        const data={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            isAdmin:false
        }
        await collection.insertMany([data])
        res.render('index',{message:"Account created successfully.."})
    }
}

module.exports = {login,signup,signupPost}