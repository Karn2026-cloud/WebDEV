const Setting =
require("../models/Setting");

const getSettings =
async(req,res)=>{

const settings =
await Setting.findOne();

res.json(settings);

};

const updateSettings =
async(req,res)=>{

let settings =
await Setting.findOne();

if(!settings){

settings =
await Setting.create(
req.body
);

}else{

settings =
await Setting.findByIdAndUpdate(
settings._id,
req.body,
{
new:true
}
);

}

res.json(settings);

};

module.exports = {
getSettings,
updateSettings
};