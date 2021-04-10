var Type = require('../model/Type');

const TypeDel = (req,res,next) => {
    var id = req.query.id;
    Type.remove({_id:id}).then((doc)=>{
      if(doc) {
        res.redirect('/admin/type/list');
      }
    })
}

module.exports = TypeDel;