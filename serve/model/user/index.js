const userModel = require("./Table")

const user = {
    add: (info) => {
        return userModel.insertMany([info])
    },
    query: (info) => {
        return userModel.find(info);
    }
}

module.exports = user;