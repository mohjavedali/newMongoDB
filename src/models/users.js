const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  userID: { type: String, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hobbies: [{ type: String }],
  address: { 
    city: { type: String }, 
    state: { type: String }, 
    zip: { type: String } 
  },
  createdAt: { type: Date, default: Date.now },
  
});

userSchema.pre('save', function (next) {
  if (!this.userID) {
    this.userID = Math.floor(100000000 + Math.random() * 9000000000).toString();
  }
  next();
});

const User = mongoose.model('Users', userSchema);
module.exports = User;