var Marklist = require('../model/Mark');

//便签删除
const MarkDel = (req,res,next) => {
    var id = req.query.id;
    Marklist.remove({_id:id}).then((doc)=>{
      if(doc) {
        res.redirect('/admin/mark/list');
      }
    })
}

module.exports = MarkDel;