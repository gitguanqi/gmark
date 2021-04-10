var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('welcome', { title: '欢迎来到小奇便签！' });
});

// 便签后台
router.get('/admin', (req, res, next) => {
  res.render('index', { title: '欢迎来到便签列表！' });
});

// 便签后台设置
router.get('/admin/set',require('../controller/admin_set').showSet);

// 便签后台编辑
router.get('/admin/set/edit',require('../controller/admin_set').showSetEdit);

// 便签后台编辑
router.post('/admin/set/edit',require('../controller/admin_set').SetEdit);

// 便签后台添加
router.get('/admin/set/add',require('../controller/admin_set').showSetAdd);

// 便签后台添加
router.post('/admin/set/add',require('../controller/admin_set').SetAdd);

// 便签后台删除管理员
router.get('/admin/set/del',require('../controller/admin_set').SetDel);

// 便签后台便签搜索
router.get('/admin/search',require('../controller/search'));

// 后台登录
router.get('/admin/login',require('../controller/admin').showLogin);

// 后台退出
router.get('/admin/logout',require('../controller/admin').AdminLogout);

// 后台登录
router.post('/admin/login',require('../controller/admin').LoginSet);

//便签列表
router.get('/admin/mark/list',require("../controller/mark_list").showMarkList);

// //便签信息查看
router.get('/admin/mark/info',require("../controller/mark_list").showMarkInfo);

// //便签添加显示
router.get('/admin/mark/add',require("../controller/mark_add").showMarkAdd);

// //便签添加操作
router.post('/admin/mark/add',require("../controller/mark_add").MarkAddSet);

// //便签编辑显示
router.get('/admin/mark/edit',require("../controller/mark_edit").ShowMarkEdit);

// //便签编辑操作
router.post('/admin/mark/edit',require("../controller/mark_edit").MarkEditSet);

// //便签删除
router.get('/admin/mark/del',require("../controller/mark_del"));

// //分类列表
router.get('/admin/type/list',require("../controller/type_list"));

// //分类添加显示
router.get('/admin/type/add',require("../controller/type_add").ShowTypeAdd);

// //分类添加操作
router.post('/admin/type/add',require("../controller/type_add").TypeAddSet);

// //分类编辑显示
router.get('/admin/type/edit',require("../controller/type_edit").showTypeEdit);

// //分类编辑操作
router.post('/admin/type/edit',require("../controller/type_edit").TypeEditSet);

// //分类删除
router.get('/admin/type/del',require("../controller/type_del"));

module.exports = router;
