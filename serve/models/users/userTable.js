const mongoose = require("../db")
const schema = mongoose.Schema; //模型生成器(表生成器)

const userSchema = new schema({
    username:String,
    password:String,
    userId:String,
    userPhone:Number,
    userEmail:String
});

module.exports = mongoose.model("userinfo", userSchema);