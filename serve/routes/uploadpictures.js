const express = require('express');
const router = express.Router();
const imgModel = require('../model/addImages')
router.post('/add', async function (req, res, next) {
    const { name, url } = req.body
    const data = await imgModel.add({ name, url });
    console.log(data, 'data');
    if (data) {
        res.json({
            code: 200,
            msg: "成功",
        })
    }
})

module.exports = router;