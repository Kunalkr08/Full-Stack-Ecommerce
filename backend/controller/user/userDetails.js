const userModel = require("../../models/userModel");

async function userDeatilsController(req,res){
    
    try{
        console.log("userId",req?.userId);

        const user = await userModel.findById(req?.userId);

        console.log("userxyyyyyyyyyy",user)
        
        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDeatilsController