const Testimonial =
require("../models/Testimonial");

const getTestimonials =
async(req,res)=>{

const data =
await Testimonial.find()
.sort({
createdAt:-1
});

res.json(data);

};

const createTestimonial =
async(req,res)=>{

const data =
await Testimonial.create(
req.body
);

res.status(201).json(data);

};

const deleteTestimonial =
async(req,res)=>{

await Testimonial.findByIdAndDelete(
req.params.id
);

res.json({
message:"Deleted"
});

};

module.exports = {
getTestimonials,
createTestimonial,
deleteTestimonial
};