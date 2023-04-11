const express = require('express');
const router = express.Router();
const crypto = require("crypto");
const user = require("../model/user")


router.post('/register', function (req, res, next) {
  const { username, password, userId, userPhone, userEmail } = req.body;
  const md5 = crypto.createHash('md5');
  const userpwd = md5.update(password).digest("base64");//加密

  user.query({ username }).then(result => {
    if (result) {
      res.json({
        code: 1,
        msg: "用户名已存在"
      })
      return
    } else {

      user.add({ username, userpwd, userId, userPhone, userEmail }).then(data => {
        
        res.json({
          code: 200,
          msg: "注册成功"
        })
      })

    }
  })


})

module.exports = router;
