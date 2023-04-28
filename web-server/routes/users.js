const express = require('express');
const router = express.Router();
const mysql = require('../models/mysql')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
//登录
router.post('/login', async function (req, resx, next) {
  const { username, password } = req.body
  const md5 = crypto.createHash('md5');
  const pwd = md5.update(password).digest('hex');
  const sql = `select * from userinfo where username="${username}" antd password="${pwd}"`
  const userData = await mysql.query(sql);
  console.log(userData)

})

module.exports = router;
