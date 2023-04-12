const mongoose = require("../db")

const schema = mongoose.Schema;
const userSchema = new schema({
    name: String,
    url: String,
})

module.exports = mongoose.model('images', userSchema)