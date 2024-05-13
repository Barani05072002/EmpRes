const mongo = require('mongoose')
const empModel = require('./empModel')

const Schema = mongo.Schema;

const UserSchema = new Schema({
    username : {
        type: String,
        require: true,
        unique : true,
    },
    password :{
        type: String,
        require : true,
        minLength : 8,
        default : "password123"
    },
    employee : {
        type : Schema.Types.ObjectId,
        ref : 'Employee',
        require : true
    }
})

module.exports = mongo.model("User",UserSchema)