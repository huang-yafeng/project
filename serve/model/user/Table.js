const mongoose = require("../db")

const schema = mongoose.Schema;
const userSchema = new schema({
    username: String,
    password: String,
    userId: Number,
    userPhone: String,
    userEmail: String
})

module.exports = mongoose.model('userinfo', userSchema)