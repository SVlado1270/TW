var sqlDb = require('mysql')
var settings = require('../settings')

exports.executeSql = function (sql, callback) {

    var conn = new sqlDb.createConnection(settings.dbConfig)
    conn.query(sql, (err, results, fields) => {
        if (err) callback(err)
        callback(results)
      })
};