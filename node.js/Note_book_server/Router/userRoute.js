const express=require("express")
const UserRouter=express.Router()
const userModel=require("../model/userModel")
const bcrypt=require("bcrypt")

// Registration  user

UserRouter.post('/Register', async (req, res) => {
    const { username, email, password, age, gender } = req.body;
    try {
        bcrypt.hash(password,5, async(err,hash)=>{
            if(err){
                res.status(500).json({error:"error hashing password"})
            }else{
                const user = new userModel({ username, email, password:hash, age, gender });
        await user.save();
        res.status(200).send(user);  // Sending the saved user data back to the client

            }

        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'An error occurred while registering the user.' });  // Sending an error message if something goes wrong
    }
});


module.exports=UserRouter