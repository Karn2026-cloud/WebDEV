const mongoose =
require("mongoose");

const schema =
new mongoose.Schema({

  heroTitle:String,
  heroSubtitle:String,
  heroDescription:String,

  aboutTitle:String,
  aboutDescription:String,

  servicesTitle:String,
  servicesDescription:String

});

module.exports =
mongoose.model(
  "PortfolioContent",
  schema
);