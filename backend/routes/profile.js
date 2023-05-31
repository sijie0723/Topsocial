const express = require('express')
const profileRouter = express.Router()
const {getProfile}=require('../controllers/profileController')

// /api/profile  get profile
profileRouter.get("/",getProfile );


module.exports = profileRouter