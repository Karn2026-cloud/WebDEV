const express =
require("express");

const router =
express.Router();

const Project =
require("../models/Project");

const Message =
require("../models/Message");

router.get(
"/stats",
async(req,res)=>{

const projects =
await Project.countDocuments();

const messages =
await Message.countDocuments();

res.json({
projects,
messages
});

}
);

module.exports =
router;