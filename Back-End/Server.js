const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const connectDatabase = require('./config/connectDatabase')
// const taskRoute = require('./routes/taskRoute')
const userRoute = require('./routes/userRoute')
const empRoute = require('./routes/empRoute')

connectDatabase()
const server = express()
dotenv.config({path:path.join(__dirname,'config','.env')})

server.use(cors());
server.use(express.json());
server.use('/api/users',userRoute);
server.use('/api/emp',empRoute);

server.listen(process.env.PORT,()=>{
    console.log("Server is starded to listen "+process.env.PORT)
})