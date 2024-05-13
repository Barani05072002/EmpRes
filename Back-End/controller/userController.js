const mongo = require('mongoose')
const userModel = require('../model/UserModel')


const createUser = async (data) =>{
    const {username,employee} = data
    try{
        const user = await userModel.create({username,employee})
        return user
    }catch(err){
        const error = {message : err.message}
        return error
    }  
};
const checkUser = async (req,res) =>{
    const {username,password} = req.body
    try{
        const singleUser = await userModel.findOne({username})
        if(singleUser['password']===password)
           return res.status(200).json(singleUser)
        else
           return res.status(300).json({message:"incorrect password"})
    }
    catch(error){
        return res.status(400).json({message:"user not found"})
    }
};
const getAllUser = async (req,res)=>{
    try{
        const user = await userModel.find({})
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const getSingleUser = async(req,res)=>{
        const {id} = req.params
        if(!mongo.Types.ObjectId.isValid(id))
            return res.status(400).json({message:"User Not found"})

        try{
            const singleUser = await userModel.findById(id)
            res.status(200).json(singleUser)

        }catch(err){
            res.status(400).json({error:"Single User not found"})
        }
}

const updateUser = async(req,res)=>{
    const {id} = req.params
    if(!mongo.Types.ObjectId.isValid(id))
        res.status(400).json({message:"Task not found"})

    try{
        const user = await userModel.findByIdAndUpdate({_id:id}
            ,{...req.body})
        res.status(200).json({user})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// const deleteUser = async(req,res)=>{
//     const {username} = req.params;
//     // if(!mongo.Types.ObjectId.isValid(id))
//     //     res.status(400).json({message:"Task not found"})

//     try{
//         // const user = await userModel.findByIdAndDelete(id)
//         res.status(200).json(user)
//     }catch(err){
//         res.status(400).json({error:err.message})
//     }
// }
const deleteUser = async(username)=>{
    try{
        const user = await userModel.findOneAndDelete({username})
        return user
    }catch(err){
        return JSON.stringify({message : "user not found"})
    }
}
module.exports = {createUser
    ,getAllUser
    ,getSingleUser
    ,updateUser
    ,deleteUser
    ,checkUser}