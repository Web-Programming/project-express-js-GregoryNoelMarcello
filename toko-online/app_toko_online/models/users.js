const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Gunakan email yang valid']
    },
    password: {
        type: String,
        required: [true, ' Kata sandi harus diisi'],
        minlength: [6, 'Minimal 6 karakter'],
        select: false
    },
    address: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;