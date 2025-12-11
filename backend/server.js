require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const Contact = require("./models/Contacts");
const Project = require("./models/Project");

const app = express();
app.use(cors());
app.use(express.json());

// --------------------------
//  EMAIL SENDER (NODEMAILER)
// --------------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // Gmail app password
  },
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save in MongoDB
    const newContact = new Contact(req.body);
    await newContact.save();

    await transporter.sendMail({
      from: `"Portfolio Contact Notification" <${req.body.email}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Portfolio Contact Message",
      html: `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
    });

    res.json({
      success: true,
      message: "Message saved & email notification sent!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, projects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// for versel to check it is live
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Live");
});
app.get("/contact", (req, res) => {
  res.send("Contact POST endpoint is active");
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


module.exports = app;

