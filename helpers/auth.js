module.exports = {
  ensureAuthenticated: function(req,res,next){
    if(req.ensureAuthenticated()){
      return next()
    }
    req.flash('error_msg','Not Athorized')
    res.redirect('/users/login')
  }
}