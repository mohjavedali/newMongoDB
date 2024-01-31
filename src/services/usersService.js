const Users = require('../models/users');

exports.getUsers = async () => {

  try {
    return await Users.find();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

exports.createUsers = async (value) => {

  try {
    const User = new Users(value);
    return await User.save(value);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

exports.updateUsers = async (userId, value) => {

  try {
    return await Users.updateOne({ userId: userId }, 
      { $set: { name: value.name, age: value.age }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }

}

exports.deleteUsers = async (userId) => {

  try {
    return await Users.deleteOne({ userID: userId });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }

}