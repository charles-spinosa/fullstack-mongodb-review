const helpers = require('../database/dbHelpers.js');
const controller = {
  get: (req, res) => {
    helpers
      .get()
      .then(data => {
        res.status(200).end(JSON.stringify(data));
      })
      .catch(err => res.status(500).end(JSON.stringify(err)));
  },
  post: (req, res) => {
    helpers
      .add(req.body)
      .then(() => res.status(200).end('successfully added'))
      .catch(err => res.status(500).end(JSON.stringify(err)));
  },
  delete: (req, res) => {
    helpers
      .delete(req.params)
      .then(() => res.status(200).end('successfully deleted'))
      .catch(err => res.status(500).end(JSON.stringify(err)));
  },
  put: (req, res) => {
    helpers
      .update(req.params, req.body)
      .then(() => res.status(200).end('successfully updated'))
      .catch(err => res.status(500).end(JSON.stringify(err)));
  }
};

module.exports = controller;
