const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send", async (req, res) => {

  try {

    const {
      to,
      subject,
      message
    } = req.body;

    const transporter =
    nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }

    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to,

      subject,

      text: message

    });

    res.json({
      success: true,
      message: "Email Sent"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Email Failed"
    });

  }

});

module.exports = router;