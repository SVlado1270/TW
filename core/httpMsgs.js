var settings = require('../settings')
var fs = require('fs')
var path = require('path')


exports.show500 = function (req, resp, err) {
    if (settings.httpMsgFormat === "HTML") {
        resp.writeHeader(500, { "Content-Type": "text/html" })
        resp.write("<html><head><title>a</title></head><body><p>500: Internal " + err + " </p></body></html>")
    }
    else {
        resp.writeHeader(200, { "Content-Type": "application/json" })
        resp.write(JSON.stringify({ data: "ERROR OCCURED: " + err }));
    }
    resp.end()
}

exports.showHome = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            resp.writeHead(404);
            resp.write('File not found');
        }
        else {
            resp.write(data)
        }
        resp.end()
    })
}

exports.getHtml = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    var htmlPath = path.join(__dirname, '../', req.url)
    var fileStream = fs.createReadStream(htmlPath, null)
    fileStream.pipe(resp)
}

exports.getCss = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/css' })
    var cssPath = path.join(__dirname, '../', req.url);
    var fileStream = fs.createReadStream(cssPath, null)
    fileStream.pipe(resp)
}


exports.getSvg = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'image/svg+xml' })
    var svgPath = path.join(__dirname, '../', req.url)
    var fileStream = fs.createReadStream(svgPath, null)
    fileStream.pipe(resp)
}

exports.getJs = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'module/javascript' })
    var jsPath = path.join(__dirname, '../', req.url)
    var fileStream = fs.createReadStream(jsPath, null)
    fileStream.pipe(resp)
}

exports.getPng = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'image/png' })
    var pngPath = path.join(__dirname, '../', req.url)
    var fileStream = fs.createReadStream(pngPath, null)
    fileStream.pipe(resp)
}

exports.getJudet = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./judet.html', null, function (error, data) {
        if (error) {
            resp.writeHead(404);
            resp.write('File not found');
        }
        else {
            resp.write(data)
        }
        resp.end()
    })
}

exports.getRegiune = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./regiune.html', null, function (error, data) {
        if (error) {
            resp.writeHead(404);
            resp.write('File not found');
        }
        else {
            resp.write(data)
        }
        resp.end()
    })
}

exports.show404 = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' })

    resp.writeHead(404);
    resp.write('File not found');
    resp.end()
}
