const Pricing =
require("../models/Pricing");

const getPlans =
async(req,res)=>{

const plans =
await Pricing.find();

res.json(plans);

};

const addPlan =
async(req,res)=>{

const plan =
await Pricing.create(
req.body
);

res.json(plan);

};

const updatePlan =
async(req,res)=>{

const plan =
await Pricing.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);

res.json(plan);

};

const deletePlan =
async(req,res)=>{

await Pricing.findByIdAndDelete(
req.params.id
);

res.json({
message:"Deleted"
});

};

module.exports = {
getPlans,
addPlan,
updatePlan,
deletePlan
};