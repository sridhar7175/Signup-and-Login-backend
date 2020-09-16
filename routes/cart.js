var express=require('express');
var router=express.Router()
var {addItemCart}=require('../controllers/cart')

router.post('/user/cart/addtocart',addItemCart)

module.exports=router