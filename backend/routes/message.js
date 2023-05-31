const express = require('express')
const messageRouter = express.Router();
const {getMessage}=require('../controllers/messageController')


// /api/message get message
//http://localhost/api/mesaage
//http://localhost:8000/message
messageRouter.get('/',getMessage)
 

module.exports=messageRouter