const express = require('express');
const router = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken")
const user = require("../model/user")

//登录
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  const md5 = crypto.createHash('md5');
  const userpwd = md5.update(password).digest("base64");//加密

  const data = await user.query({ username, password: userpwd })

  if (data && data.length > 0) {

    const token = jwt.sign({ username: data[0].username, id: data[0]._id, userId: data[0].userId }, "key", { expiresIn: 60 * 60 * 72 });
    const userinfo = {
      username: data[0].username,
      userId: data[0].userId,
      userPhone: data[0].userPhone,
      userEmail: data[0].userEmail,
    }

    res.json({
      code: 0,
      msg: "成功",
      data: userinfo,
      token: token
    })
  } else {
    //查询不到
    res.json({
      code: -1,
      msg: "用户名或者密码不正确"
    })
  }

})

//注册
router.post('/register', function (req, res, next) {
  const { username, password, userId, userPhone, userEmail } = req.body;
  const md5 = crypto.createHash('md5');
  const userpwd = md5.update(password).digest("base64");//加密

  user.query({ username }).then(result => {

    if (result.length > 0) {
      res.json({
        code: 1,
        msg: "用户名已存在",
      })
      return
    } else {

      user.add({ username, password: userpwd, userId, userPhone, userEmail }).then(data => {

        res.json({
          code: 200,
          msg: "注册成功"
        })
      })

    }
  })


})

module.exports = router;
