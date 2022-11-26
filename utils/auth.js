const withAuth = (req, res, next) => {
  
  if (!req.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
