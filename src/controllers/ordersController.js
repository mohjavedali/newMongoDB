const orders = require('../services/ordersService');

exports.getOrders = async (req, res) => {

  try {
    const userUpdate = await orders.getOrders();
    res.status(200).json({
      message: 'Get all record successfully.',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOrders = async (req, res) => {

  try {
    const userUpdate = await orders.createOrders(req.body);
    res.status(201).json({
      message: 'Orders created successfully',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

exports.updateOrders = async (req, res) => {

  const userId = req.params.userId;
  try {
    const userUpdate = await orders.updateOrders(userId, req.body);
    res.status(200).json({
      message: 'Orders updated successfully',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

exports.deleteOrders = async (req, res) => {

  try {
    const userUpdate = await orders.deleteOrders(req.params.orderid);
    res.status(200).json({
      message: 'Orders deleted successfully',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};