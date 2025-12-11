// models/Contact.js
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, "Email is required"],
    trim: true,
    lowercase: true 
  },
  message: { 
    type: String, 
    required: [true, "Message is required"] 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
});

// ⭐️ FIX: Explicitly specify the collection name "contactDetails"
module.exports = mongoose.model("Contacts", ContactSchema, "contactDetails"); 
// The third argument is the collection name