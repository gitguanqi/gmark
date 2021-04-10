var Api = require('../model/Api');

const ApiDel = (req,res,next) => {
    var id = req.query.id;
    Api.remove({_id:id}).then((doc)=>{
      if(doc) {
        res.redirect('/api');
      }
    })
}

module.exports = ApiDel;