const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: { type: String, unique: true },
  // type: mongoose.Schema.Types.ObjectId,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "Users" , required: true },
  products: [{ type: String }],
  totalAmount: { type: Number, required: true },
});

orderSchema.pre('save', function (next) {
    if (!this.orderID || this.orderID.trim() === '') {
      this.orderID = Math.floor(100000000 + Math.random() * 9000000000).toString();
    }
    next();
});

const Orders = mongoose.model('Orders', orderSchema);
module.exports = Orders;

