const userModel = require('../models/userModel');

module.exports = {
    insertUsers: (req, res) => {
        const status = userModel.addUsers(req.params.users);
        res.send('status');
    },
    getUsers: (req, res) => {
        const users = userModel.getUsers();
        res.send(users);
    },
    getUser: (req, res) => {
        const user = userModel.getUser(req.params.id);
        res.send(user);
    },
    updateUser: (userId) => {
        const updatedUser = userModel.updateUser();
        return updatedUser;
    },
    deleteUser: (userId) => {
        const deletedId = userModel.deleteUser(userId);
        return deletedId;
    }
};