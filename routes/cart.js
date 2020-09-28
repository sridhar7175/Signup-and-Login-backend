var express=require('express');
var router=express.Router()
const {addItemToCart}=require('../controllers/cart')

router.post('/user/cart/addtocart',addItemToCart)

module.exports=router