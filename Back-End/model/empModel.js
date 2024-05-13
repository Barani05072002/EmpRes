const mongo = require('mongoose')

const Schema = mongo.Schema;

const EmpSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    mobile : {
        type : String,
        require : true,
        minLength : 10,
    },
    designation : {
        type : String,
        enum : ["HR","MANAGER","SALES"],
        default : "SALES"
    },
    gender : {
        type : String,
        enum : ["Male","Female"]
    },
    course : {
        type : String,
        enum : ["BCA","BSC","MCA"]
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongo.model("Employee",EmpSchema)