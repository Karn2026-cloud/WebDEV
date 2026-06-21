const mongoose =
require("mongoose");

const settingSchema =
new mongoose.Schema({

portfolioName:String,

email:String,

phone:String,

whatsapp:String,

linkedin:String,

github:String,

instagram:String,

about:String

});

module.exports =
mongoose.model(
"Setting",
settingSchema
);