const express = require('express');
const router = express.Router();
const { getUsers, createUsers, updateUsers, deleteUsers } = require("../controllers/usersController");
const { getOrders, createOrders, updateOrders, deleteOrders } = require("../controllers/ordersController");

router.get('/users', getUsers);
router.post('/users', createUsers);
router.put('/users/:userId', updateUsers);
router.delete("/users/:userId", deleteUsers);

router.get('/orders', getOrders);
router.post('/orders', createOrders);
router.put('/orders/:orderid', updateOrders);
router.delete("/orders/:orderid", deleteOrders);

module.exports = router;