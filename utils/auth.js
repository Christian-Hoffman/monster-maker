const withAuth = (req, res, next) => {
  if (!req.session.isOnline) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
