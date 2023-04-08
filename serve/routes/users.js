const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const jwt = require("jsonwebtoken")
const userModel = require("../models/users")


//登录
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body
  const md5 = crypto.createHash('md5');
  const userpwd = md5.update(password).digest('hex');

  const result = await userModel.query({ username, userpwd })
  console.log(result, 'result');
  

})

//注册
router.post('/register', function (req, res, next) {
  const { username, password, userId, userPhone, userEmail } = req.body
  const md5 = crypto.createHash('md5');
  const userpwd = md5.update(password).digest('hex');

  // console.log(username, password, userId, userPhone, userEmail,'参数');

  userModel.query({ username }).then(result => {
    console.log(result,'result');

    if (result.length) {
      //用户名存在
      res.json({
        code: 0,
        msg: "用户名已存在"
      })

    } else {

      userModel.register({ username, userpwd, userId, userPhone, userEmail }).then(data => {
        console.log(data,'...data')
        res.json({
          code: 1,
          msg: "注册成功"
        })
      })

    }

  })

})



module.exports = router;
