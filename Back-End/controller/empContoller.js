const mongo = require('mongoose')
const empModel = require('../model/empModel')
const {createUser,deleteUser} = require('./userController')
const {mobileCheck} = require('./check')

const createEmp = async (req,res) =>{
    const {name,email,mobile,designation,gender,course} = req.body

    if(mobileCheck(mobile))
        return res.status(310).json({message : "Enter the valid mobile number"})

    try{
        const emp = await empModel.create({name,email,mobile,designation,gender,course})
        const data = {
            employee:emp,
            username:email, 
        }
        const user = createUser(data)
        return res.status(200).json(user)
    }
    catch(err){
        // if(error.errorResponse.code == 11000)
        //     return res.status(490).json({message : "already registered"})

        return res.status(400).json({error : err.message,errortype : err.Types,err : err})
    }  
};

const getAllEmp = async (req,res)=>{
    try{
        const emp = await empModel.find({})
        res.status(200).json(emp)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const getSingleEmp = async(req,res)=>{
    const {id} = req.params
    console.log(id)
    if(!mongo.Types.ObjectId.isValid(id))
        return res.status(400).json({message:"Emp Not found"})

    try{
        const singleEmp = await empModel.findById(id)
        res.status(200).json(singleEmp)
    }catch(err){
        res.status(400).json({error:"Emp not found"})
    }
}

const updateEmp = async(req,res)=>{
    const {id} = req.params
    if(!mongo.Types.ObjectId.isValid(id))
        res.status(400).json({message:"Emp not found"})

    try{
        const emp = await empModel.findByIdAndUpdate({_id:id}
            ,{...req.body})
        res.status(200).json({emp})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const deleteEmp = async(req,res)=>{
    const {id} = req.params;
    if(!mongo.Types.ObjectId.isValid(id))
        res.status(400).json({message:"Task not found"})

    try{
        const emp = await empModel.findByIdAndDelete(id)
        const user =   deleteUser(emp['email'])
        res.status(200).json({emp,user})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
module.exports = {createEmp,getAllEmp,getSingleEmp,updateEmp,deleteEmp}