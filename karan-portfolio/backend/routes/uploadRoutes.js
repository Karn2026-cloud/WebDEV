const express =
require("express");

const router =
express.Router();

const upload =
require("../middleware/upload");

router.post(
"/",
upload.single("image"),

(req,res)=>{

res.json({

image:
req.file.path

});

}
);

module.exports =
router;