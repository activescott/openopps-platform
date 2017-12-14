const _ = require('lodash');
const dao = require('postgres-gen-dao');


module.exports = function (db) {
  return {
    Notification: dao({ db: db, table: 'notification' }),
  };
};