const mongo = require('mongoose')

const connectDatabase = ()=>{
    // console.log(process.env.DB_URL) problem

    mongo.connect('mongodb://127.0.0.1:27017/company')
    .then((con) => console.log("Database Connected Successfully with "+con.connection.host))
    .catch((err) => console.log("Database connection error \n error: "+ err))
}

module.exports = connectDatabase