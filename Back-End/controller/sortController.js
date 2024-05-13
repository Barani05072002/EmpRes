const mongo = require('mongoose')
const empModel = require('../model/empModel')

const getByName = async (req,res)=>{
    try{
        const emp = await empModel.find({}).collation({locale:'en',strength:2}).sort({email:1})
        res.status(200).json(emp)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
const getByMail = async (req,res)=>{
    try{
        const emp = await empModel.find({}).collation({locale:'en',strength:2}).sort({email:1})
        res.status(200).json(emp)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
const getByDate = async (req,res)=>{
    try{
        const emp = await empModel.find({}).sort({createdAt:-1})
        res.status(200).json(emp)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
module.exports = {getByName,getByMail,getByDate}