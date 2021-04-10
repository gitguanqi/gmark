var experss = require('express');
var router = experss.Router();

// 所有的接口
//接口文档说明

// 接口列表
router.get('/',require('../controller/api_list'));

//接口添加显示
router.get('/add',require('../controller/api_add').ShowApiAdd);

//接口添加操作
router.post('/add',require('../controller/api_add').AddApi);

//接口编辑显示
router.get('/edit',require('../controller/api_edit').ShowEditApi);

//接口编辑操作
router.post('/edit',require('../controller/api_edit').EditApi);

//接口删除
router.get('/del',require('../controller/api_del'));

// 获取便签的
router.get('/mark/list',require('../controller/api').getAllMark);

// 查看便签
router.get('/mark/info',require('../controller/api').LookAllMark);

// 添加便签
router.post('/mark/add',require('../controller/api').AddMark);

// 编辑便签
router.put('/mark/edit',require('../controller/api').EditMark);

//删除便签
router.delete('/mark/del',require('../controller/api').delMark);

//获取类型
router.get('/type',require('../controller/api').getType);

//搜索便签
router.get('/search',require('../controller/api').searchMark);

module.exports = router;