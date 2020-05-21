const http = require('http');
const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbName,
    multipleStatements: true
})

connection.connect(function (err) {
    if (err) {
        console.log('error: ' + err.message)
    }
    console.log('Connection established')
})

/*const server = http.createServer((request, response) => {
    if(request.url === '/test')
    {
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        var string = "HELLO";
        var obj = {
            name: 'Vlad'
        };
        response.send(obj);
    }
    
});*/


var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);

    // incarcare pagini

    var criterii2 = ['educatie', 'varste', 'rata', 'medii']
  var judete2 = ['IASI', 'BOTOSANI', 'BACAU', 'VASLUI', 'GALATI', 'TULCEA', 'CONSTANTA', 'IALOMITA', 'BRAILA', 'VRANCEA', 'NEAMT', 'SUCEAVA',  'BISTRITA', 'MARAMURES', 'MURES',  'HARGHITA',  'COVASNA',  'BUZAU', 'PRAHOVA',  'ILFOV', 'DAMBOVITA', 'BRASOV', 'GIURGIU', 'TELEORMAN', 'OLT', 'DOLJ', 'ALBA',  'MEHEDINTI', 'VALCEA', 'ARGES', 'SIBIU', 'CLUJ', 'SALAJ', 'BIHOR', 'ARAD', 'TIMIS', 'CARAS',  'HUNEDOARA', 'BUCURESTI', 'CARAS', 'SATUMARE', 'CALARASI']
    for (var jud of judete2) {
      if (req.url === '/' + jud) {
          var obj = {
              Judet: jud
          }
        res.writeHead(200, { 'Content-Type': 'application/json' })
            var temp = 'SELECT * from varste WHERE judet = ' + mysql.escape(jud) + '; SELECT * from rata WHERE judet = ' + mysql.escape(jud) + '; SELECT * from educatie WHERE judet = ' + mysql.escape(jud) + '; SELECT * from rata WHERE judet = ' + mysql.escape(jud)

        connection.query(temp, (err, results, fields) => {
          if (err) throw err
          var test = JSON.stringify(results)
          var rez = JSON.parse(test)
          result = []
          result.push(obj)
          result.push(rez)
          res.end(JSON.stringify(result))
        })
      }
    }

    var criterii = ['educatie', 'varste', 'rata', 'medii']
  var judete = ['IASI', 'BOTOSANI', 'BACAU', 'VASLUI', 'GALATI', 'TULCEA', 'CONSTANTA', 'IALOMITA', 'BRAILA', 'VRANCEA', 'NEAMT', 'SUCEAVA',  'BISTRITA', 'MARAMURES', 'MURES',  'HARGHITA',  'COVASNA',  'BUZAU', 'PRAHOVA',  'ILFOV', 'DAMBOVITA', 'BRASOV', 'GIURGIU', 'TELEORMAN', 'OLT', 'DOLJ', 'ALBA',  'MEHEDINTI', 'VALCEA', 'ARGES', 'SIBIU', 'CLUJ', 'SALAJ', 'BIHOR', 'ARAD', 'TIMIS', 'CARAS',  'HUNEDOARA', 'BUCURESTI', 'CARAS', 'SATUMARE', 'CALARASI']
  for (var criteriu of criterii) {
    for (var judet of judete) {
      if (req.url === '/' + judet + '/' + criteriu) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var temp = 'SELECT * FROM ' + criteriu + ' WHERE JUDET = ' + mysql.escape(judet)

        connection.query(temp, (err, results, fields) => {
          if (err) throw err
          var test = JSON.stringify(results)
          var rez = JSON.parse(test)
          res.end(JSON.stringify(rez))
        })
      }
    }
  }


    if (req.url === '/Regiune/Nord-Est') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['IASI', 'VASLUI', 'BACAU', 'BOTOSANI', 'NEAMT', 'SUCEAVA']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' ORDER BY JUDET'
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/Nord-Vest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['BIHOR', 'CLUJ', 'SALAJ', 'SATUMARE', 'MARAMURES', 'BISTRITA']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' ORDER BY JUDET'
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }

    if (req.url === '/Regiune/Bucuresti-Ilfov') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['BUCURESTI', 'ILFOV']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' ORDER BY JUDET'
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/Centru') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['ALBA', 'BRASOV', 'COVASNA', 'HARGHITA', 'MURES', 'SIBIU']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + '  ORDER BY JUDET'
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/Vest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['ARAD', 'CARAS', 'HUNEDOARA', 'TIMIS']
       var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' ORDER BY JUDET'
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/Sud-Vest-Oltenia') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['DOLJ', 'GORJ', 'MEHEDINTI', 'OLT', 'VALCEA']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' ORDER BY JUDET'
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/Sud-Muntenia') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['ARGES', 'CALARASI', 'DAMBOVITA', 'GIURGIU', 'IALOMITA', 'PRAHOVA', 'TELEORMAN']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' ORDER BY JUDET'
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/Sud-Est') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['BRAILA', 'BUZAU', 'CONSTANTA', 'GALATI', 'TULCEA', 'VRANCEA']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' ORDER BY JUDET'
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }

})
var port = process.env.PORT;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
