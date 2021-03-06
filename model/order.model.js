const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        requried:true,
    },
    products:[{
        id:{
            type:String,
            required:true,
        },
        size:{
            type:String,
            required:true,
        },
        color:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        },
        price:{
            type:number,
            required:true
        },
        gender:{
            type:String,
            requried:true
        }
    }],
    total:{
        type:number,
        required:true
    }
})