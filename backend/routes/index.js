const express=require('express')
const axios = require("axios")
const highlineRouter = require('./highline')
const messageRouter = require('./message')
const profileRouter = require('./profile')
const cardRouter = require('./cards')
const requestRouter=require('./request')

const router = express.Router();
//create router
router.use('/highline',highlineRouter)
router.use('/message', messageRouter)
router.use('/profile',profileRouter)
router.use('/cards',cardRouter)
router.use('/request',requestRouter)


module.exports = router;

