function requireAuth(req, res, next) {
  console.log(req.get("Authorization"));
  const { user_name, password } = req.body;
  const user_name = req.get("Authorization");
  const password = req.get("password");

  next();
}

module.exports = {
  requireAuth
};
