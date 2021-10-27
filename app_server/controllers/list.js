const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

const songs = [
  {
    title: 'Want You Back',
    artist: '5 Seconds of Summer'
  },
  {
    title: 'Cheater',
    artist: 'The Vamps'
  },
  {
    title: 'I Like Me Better',
    artist: 'Lauv'
  }
]

const list = function (req, res, next) {
  request(
    {
      url: 'http://localhost:3000/api/songs',
      method: 'GET',
      json: {}
    },
    (err, response, body) => {
      let data = body;
      if (response.statusCode === 200) {
        res.render('list-display', { title: 'Music list', songs: data });
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
}

const detail = function (req, res, next) {
  request(
    {
      url: `http://localhost:3000/api/songs/${req.params.songid}`,
      method: 'GET',
      json: {}
    },
    (err, response, body) => {
      let data = body;
      if (response.statusCode === 200) {
        res.render('details', { title: data.name, song: data });
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
}

const add = function (req, res, next) {
  if(!req.param('name') || !req.param('artists')){
    _showError(req, res, 400, "Name and artist are required");
    return;
  }
  request(
    {
      url: `http://localhost:3000/api/songs`,
      method: 'POST',
      json: {
        name: req.param('name'),
        artists: req.param('artists'),
        length: req.param('length'),
        releaseYear: req.param('releaseYear')
      }
    },
    (err, response, body) => {
      let data = body;
      if (response.statusCode === 200 || response.statusCode === 201) {
        res.writeHead(302, {
          'Location': 'http://localhost:3000/songs'
        });
        res.end();
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
}

const create = function (req, res, next) {
  res.render('create', { title: 'Add a new song' });
}

const _showError = function (req, res, status, description) {
  let title = '';
  let content = '';
  if (status === 404) {
    title = '404, page not found';
    content = 'Oh dear. Looks like we can\'t find this page. Sorry.';
  } else {
    title = `${status}, something's gone wrong`;
    content = description || 'Something, somewhere, has gone just a little bit wrong.';
  }
  res.status(status);
  res.render('generic-text', {
    title: title,
    content: content
  });
};

module.exports = {
  list,
  detail,
  create,
  add
};