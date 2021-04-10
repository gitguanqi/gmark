var Marklist = require('../model/Mark');

// 便签列表
exports.showMarkList = (req,res,next) => {
    var page = req.query.page;
    var current;
    var pagesize = 5;
    if(page) {
        current = page;
    }else{
        current = 1;
    }
    Marklist.find({}).skip((current-1)*pagesize).limit(pagesize).populate('name','name').then(docs => {
        if(docs) {
            if (docs && docs.length) {
                Marklist.countDocuments().then(num => {
                    if(num) {
                        res.render('marklist',{
                            list: docs,
                            count: num,
                            current: current-1,
                            allpage: Math.ceil(num/pagesize)
                        })
                    }
                });
            } else {
                res.render('marklist',{
                    list: [],
                    count: 0,
                    current: 1,
                    allpage: 0
                })
            }
        }
    })
};

//便签信息查看
exports.showMarkInfo = (req,res,next) => {
    var id = req.query.id;
    Marklist.findById({_id:id}).populate('name','name').then(doc => {
        if(doc) {
            res.render('markinfo',{  
                info: doc
            })
        }
    })
}