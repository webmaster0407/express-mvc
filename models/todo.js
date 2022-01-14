import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    todoname: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
}, {
    timestamps: true
}, );

const Todos = mongoose.model('Todos', todoSchema);

export default Todos;