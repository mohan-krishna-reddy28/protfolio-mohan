const express = require("express");
const app = express();
const Contact = require("../models/Contacts").default;

app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = app;
