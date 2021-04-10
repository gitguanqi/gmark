var User = require('../model/User');

const UserDel = (req,res,next) => {
    var id = req.query.id;
    User.remove({_id:id}).then((doc)=>{
      if(doc) {
        res.redirect('/user/list');
      }
    })
}

module.exports = UserDel;