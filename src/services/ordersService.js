const Orders = require('../models/Orders');
const mongoose = require('mongoose');

exports.getOrders = async () => {

  try {
    return await Orders.find();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

exports.createOrders = async (value) => {
  try {
    value['userID'] = new mongoose.Types.ObjectId(value.userID);
    const Order = new Orders(value);
    return await Order.save(value);
  } catch (error) {
    console.log(error.message, "ddddddddddddd");
    res.status(500).json({ message: error.message });
  }

};

exports.updateOrders = async (orderid, value) => {

  try {
    return await Orders.updateOne({ orderID: orderid }, 
      { $set: { name: value.name, age: value.age }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

exports.deleteOrders = async (orderid) => {

  try {
    return await Orders.deleteOne({ orderID: orderid });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}