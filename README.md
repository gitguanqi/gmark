# XQ Note

> This is the documentation for this project, a note project about Vue + Node development!

[Chinese document](./zh-CN.md)

## table of Contents

+ Security
+ Background
+ Installation
+ Usage
+ API
+ Contribution
+ Agreement

## Safety

This project mainly uses the following technology stacks:

+ Front-end adopts [Vuejs](https://cn.vuejs.org) open source JS framework
+ Backend adopts [Nodejs](https://nodejs.org)
+ The database is built using [mongoDB](https://www.mongodb.com/),

The theme is self-designed.

No program security issues have been found at this time. If you have any questions, please mention [Suggestions](https://github.com/gitguanqi/xqnote/issues/new).

## Background

This repository records a project in which I learned vue + node + mongodb!

## Installation

```sh
# clone
git clone https://github.com/gitguanqi/xqnote.git xqnote
cd xqnote

# dev
npm run start
```

Open `http://localhost:3004` to see it.

The database uses mongodb

The connection method is as follows:

```sh
cd xqnote
npm install
mkdir db
mongod --dbpath=D:\xqnote\db
mongo
```

## Usage

+ Add routing information in `router`
+ Write logic code in `controller` controller
+ Write data table structure in `model` database

## API

This repository uses Node framework for development, and Vuejs for page compilation and rendering.

API request address uniform prefix: [API](http://localhost:3004/api)

+ Note list (GET): `/api/mark/list`
+ Note Information View (GET): `/api/mark/info`
+ Post-it operation (POST): `/ api/mark/add`
+ Note edit operation (PUT): `/api/mark/edit`
+ DELETE: `/api/mark/del`

## Contribution

[@gitguanqi](https://github.com/gitguanqi)

## Agreement

This project follows the [GPL3.0](https://www.gnu.org/licenses/gpl-3.0.html) agreement, Copyright By gitguanqi
