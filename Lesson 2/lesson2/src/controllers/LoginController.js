const User = require("../models/User")
const bcrypt = require("bcrypt")

module.exports = {
    async store (req,res) {
        try{
            const {email,password} = req.body;
            if(!email || !password){
                return res.status(200).json({message:"Please Fill all the details"});
            }
            const user = await User.findOne({email});

            if(!user){

                return res.status(200).json({message:"Please Register First"})
            }
            if(user && await bcrypt.compare(password ,user.password)){
                const userDetails = {
                    _id : user._id,
                    email: user.email,
                    firstName:user.firstName,
                    lastName:user.lastName
                }
                return res.json(userDetails);
            }
            else{
                return res.status(200).json({message:"Wrong Password or Email used"})
            }
        }
        catch(err) {
            console.log(err);
        }
    }
}