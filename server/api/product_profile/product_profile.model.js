'use strict';

var cradle = require('cradle');
var utility = require('../../components/utility');

var db = new (cradle.Connection)().database('product_profiles');

exports.all = all;

function all(cb) {
  db.all({ include_docs: true }, function(err, rows) {
    if (err) return cb(err);

    return cb(null, utility.removeDesignDocs(rows.toArray()));
  });
}
