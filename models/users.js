import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
}, );

userSchema.statics.findByLogin = async function(name, pwd) {
    let user = await this.findOne({
        username: name,
        password: pwd,
    });
    return user;
};


userSchema.pre('remove', function(next) {
    this.model('Message').deleteMany({ user: this._id });
    this.model('Todo').deleteMany({ user: this._id }, next);
});


const Users = mongoose.model('User', userSchema);

export default Users;