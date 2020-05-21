var sqlDb = require('mysql')
var settings = require('../settings')

exports.executeSql = function (sql, callback) {

    var conn = new sqlDb.createConnection(settings.dbConfig)
    var t = conn.query(sql, (err, results, fields) => {
        if (err) callback(err)
        conn.destroy()
        callback(results)
      })
};