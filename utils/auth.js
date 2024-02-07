const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

async function verifyJWT(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        req.chatId = decoded.id;
        next();

    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
module.exports = verifyJWT;