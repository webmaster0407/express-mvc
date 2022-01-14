const mongoose = require('mongoose');

const Users = require('./users');
const Messages = require('./messages');
const Todos = require('/Todos');

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Users, Messages, Todos };;


export default models;