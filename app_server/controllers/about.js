const about = function(req, res, next) {
  res.render('about', { title: 'About my site' });
}

module.exports = {
  about
};