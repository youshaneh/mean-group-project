const index = function(req, res, next) {
  res.render('index', { title: 'You-Sheng' });
}

module.exports = {
  index
};