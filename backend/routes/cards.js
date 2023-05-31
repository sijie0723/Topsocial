const express = require('express');
const { getCardById,postCard,deleteCardById} = require('../controllers/cardsController');
const cardRouter = express.Router();

// /api/cards?id=1 get card
//http://localhost/api/cards?id=1
//http://localhost:8000/cards?id=1
cardRouter.get('/',getCardById)
    
    
    
 // /api/cards   post a card
 //http://localhost/api/cards
 // http://localhost:8000/cards
 cardRouter.post('/',postCard)
    
 // /api/cards/:card_id delete card by id
 //http://localhost/api/card/:card_id
//http://localhost:8000/cards/5
 cardRouter.delete('/:card_id',deleteCardById)
    




module.exports=cardRouter