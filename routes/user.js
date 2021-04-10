const express = require('express');
const router = express.Router();

// 用户列表
router.get('/list',require('../controller/user_list'));

// 用户添加
router.get('/add',require('../controller/user_add').showUserAdd);

// 用户添加操作
router.post('/add',require('../controller/user_add').UserAdd);

// 用户编辑
router.get('/edit',require('../controller/user_edit').showUserEdit);

// 用户编辑操作
router.post('/edit',require('../controller/user_edit').UserEdit);

// 用户删除
router.get('/del',require('../controller/user_del'));

// 用户注册
router.post('/reg',require('../controller/user').userReg);

// 用户登录
router.post('/login',require('../controller/user').userLogin);

// 退出登录
router.post('/logout',require('../controller/user').logoutUser);

module.exports = router;