module.exports = {
  ensureAuthenticated: function(req,res,next){
    if(req.isAuthenticated()){
      return next()
    }
    req.flash('error_msg','Not Athorized')
    res.redirect('/users/login')
  }
}