const Message =
require("../models/Message");

const createMessage =
async(req,res)=>{

try{

const message =
await Message.create(
req.body
);

res.status(201).json({
success:true,
message
});

}catch(err){

res.status(500).json({
success:false,
message:err.message
});

}

};

const getMessages =
async(req,res)=>{

const messages =
await Message.find()
.sort({
createdAt:-1
});

res.json(messages);

};

module.exports = {
createMessage,
getMessages
};