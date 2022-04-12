const User = require('../models/User.js')

module.exports={
    async store(req,res){
        try{
            const {name,email,password} =req.body;
            const existentUser = await User.findOne({email})

            if(!existentUser){
                const user = await User.create({
                    name,
                    email,
                    password
                })
                return res.json(user)
            }
            return res.status(400).json({
                message:'Email exist'
            })
        }
        catch(err){
            console.log(err)
        }
    }
}