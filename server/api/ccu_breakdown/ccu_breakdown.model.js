'use strict';

var cradle = require('cradle');
var utility = require('../../components/utility');

var db = new (cradle.Connection)().database('ccu_breakdown');

exports.byDate = byDate;

function byDate(options, cb) {
  var opts = {};

  if (options) {
    if (options.limit !== undefined && !isNaN(options.limit))
      opts.limit = parseInt(options.limit);

    if (options.descending !== undefined)
      opts.descending = utility.parseBool(options.descending);
  }

  db.view('ccu_breakdown/by_date', opts, function(err, rows) {
    if (err) return cb(err);

    return cb(null, rows.toArray());
  });
}
