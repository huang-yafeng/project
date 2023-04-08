const userModel=require("./userTable")

const userinfo={
    query:(info)=>{
        return userModel.find(info);
    },
    register:(info)=>{
        return userModel.insertMany([info]);
    }
}

module.exports = userinfo;