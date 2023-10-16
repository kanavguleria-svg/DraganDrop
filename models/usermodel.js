const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'passord required'],
        minlength: [6, 'password length should be 6 character long']
    },
    preferredTheme: {
        type: String,
        default: "light"
    },
    customerId: {
        type: String,
        default: ""
    },
    subscription: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});


//update the updated date
userSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

//hashed password
userSchema.pre('save', async function (next) {
    //update
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//match
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//access token
userSchema.methods.getAccessToken = function (user) {
    console.log("you called the access token");
    const accessToken = JWT.sign({ id: user._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIREIN });
    return accessToken
}

//refresh token
userSchema.methods.getRefreshToken = function () {
    console.log("you called the refresh token");
    const refreshToken = JWT.sign({ id: this._id }, process.env.JWT_REFRESH_TOKEN, { expiresIn: process.env.JWT_REFRESH_EXPIREIN });
    return refreshToken
}

const User = mongoose.model('User', userSchema, 'user_data');

module.exports = User;