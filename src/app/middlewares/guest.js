module.exports = (req, res, nex) => {
  if (req.session && !req.session.user) {
    return onErrorResumeNext();
  }
  return res.redirect("/app/dashboard");
};
