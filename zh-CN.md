# XQ便签

> 这是本项目的说明文档，关于Vue+Node开发的一个便签项目！

[英文文档](./README.md)

## 目录

+ 安全
+ 背景
+ 安装
+ 用法
+ API
+ 贡献
+ 协议

## 安全

本项目主要使用以下技术栈：

+ 前端采用[Vuejs](https://cn.vuejs.org)开源JS框架
+ 后端采用[Nodejs](https://nodejs.org)
+ 数据库采用[mongoDB](https://www.mongodb.com/)搭建而成，

主题采用自主设计。

目前暂未发现程序安全问题，如有问题，请提[建议](https://github.com/gitguanqi/xqnote/issues/new)。

## 背景

这个仓库记录我这学习vue+node+mongodb的一个项目实战！

## 安装

```sh
# clone
git clone https://github.com/gitguanqi/xqnote.git xqnote
cd xqnote
npm install

# dev
npm run start
```

打开`http://localhost:3000`便可查看。

数据库采用mongodb

连接方法如下：

```sh
cd xqnote
mkdir db
mongod --dbpath=D:\xqnote\db
mongo
```

## 用法

+ 在`router`添加路由信息
+ 在`controller`控制器写逻辑代码
+ 在`model`数据库写数据表结构

## API

本仓库采用Node框架进行开发，使用Vuejs进行页面编译渲染。

API请求地址统一前缀： [API](http://localhost:3004/api)

+ 便签列表(GET): `/api/mark/list`
+ 便签信息查看(GET): `/api/mark/info`
+ 便签添加操作(POST): `/api/mark/add`
+ 便签编辑操作(PUT): `/api/mark/edit`
+ 便签删除(DELETE): `/api/mark/del`

## 贡献

[@gitguanqi](https://github.com/gitguanqi)

## 协议

本项目遵循[GPL3.0](https://www.gnu.org/licenses/gpl-3.0.html)协议,Copyright By gitguanqi
