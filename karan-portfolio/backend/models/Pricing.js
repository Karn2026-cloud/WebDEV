const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({

  title:String,

  price:String,

  features:[String],

  featured:{
    type:Boolean,
    default:false
  }

});

module.exports =
mongoose.model(
"Pricing",
pricingSchema
);