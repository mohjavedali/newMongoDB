const users = require('../services/usersService');

exports.getUsers = async (req, res) => {

  try {
    const userUpdate = await users.getUsers();
    res.status(200).json({
      message: 'Get all record successfully.',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createUsers = async (req, res) => {

  try {
    const userUpdate = await users.createUsers(req.body);
    res.status(201).json({
      message: 'User created successfully',
      result: userUpdate
    });
  } catch (error) {
    console.log(error.message, "kkkk");
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

exports.updateUsers = async (req, res) => {

  const userId = req.params.userId;
  try {
    const userUpdate = await users.updateUsers(userId, req.body);
    res.status(200).json({
      message: 'User updated successfully',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

exports.deleteUsers = async (req, res) => {

  try {
    const userUpdate = await users.deleteUsers(req.params.userId);
    res.status(200).json({
      message: 'User deleted successfully',
      result: userUpdate
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }

};