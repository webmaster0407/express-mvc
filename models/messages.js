const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
}, {
    timestamps: true
}, );

const Messages = mongoose.model('Messages', messageSchema);

export default Messages;