const imgModel = require("./Table")

const user = {
    add: (info) => {
        return imgModel.insertMany([info])
    },
    query: (info) => {
        return imgModel.find(info);
    }
}

module.exports = user;