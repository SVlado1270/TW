var http = require('http')
var jud = require('../Controllers/judet')
var settings = require('../settings')
var httpsMsg = require('.//httpMsgs')
var url = require('url')


http.createServer(function (req, resp) {

    const requestUrl = url.parse(req.url)
    const path = requestUrl.pathname
    console.log(path)
    var judete = ['IASI', 'BOTOSANI', 'BACAU', 'VASLUI', 'GALATI', 'TULCEA', 'CONSTANTA', 'IALOMITA', 'BRAILA', 'BUCURESTI', 'SATUMARE', 'VRANCEA', 'NEAMT', 'SUCEAVA', 'BISTRITA', 'MARAMURES', 'MURES', 'HARGHITA', 'COVASNA', 'BUZAU', 'PRAHOVA', 'ILFOV', 'DAMBOVITA', 'CARAS', 'BRASOV', 'GIURGIU', 'TELEORMAN', 'OLT', 'DOLJ', 'ALBA', 'MEHEDINTI', 'VALCEA', 'ARGES', 'SIBIU', 'CLUJ', 'SALAJ', 'BIHOR', 'ARAD', 'TIMIS', 'HUNEDOARA', 'CALARASI']
    var regiuni = ['Bucuresti-Ilfov', 'Nord-Est', 'Nord-Vest', 'Sud-Est', 'Sud-Muntenia', 'Sud-Vest-Oltenia', 'Vest', 'Centru']

    switch (req.method) {
        case "GET":
            if (req.url === '/') {
                httpsMsg.showHome(req, resp)
            }
            else if (req.url.match("\.css$")) {
                httpsMsg.getCss(req, resp)
            }
            else if (req.url.match("\.svg$")) {
                httpsMsg.getSvg(req, resp)
            }
            else if (req.url.match("\.js$")) {
                httpsMsg.getJs(req, resp)
            }
            else if (req.url.match("\.png$")) {
                httpsMsg.getPng(req, resp)
            }
            else if (req.url.match("\.html")) {
                httpsMsg.getHtml(req, resp)
            }
            else if (req.url.startsWith('/judet')) {
                //jud.getList(req, resp);

                if (req.url === '/judet') {
                    httpsMsg.show404(req, resp)
                }

                for (var nume_jud of judete) {
                    if (req.url.startsWith(`/judet/${nume_jud}`)) {
                        httpsMsg.getJudet(req, resp)
                    }
                }

            }
            else if (req.url.startsWith('/regiune')) {

                if (req.url === '/regiune') {
                    httpsMsg.show404(req, resp)
                }

                for (var nume_reg of regiuni) {
                    if (req.url === `/regiune/${nume_reg}`) {
                        httpsMsg.getRegiune(req, resp);
                        console.log('a')
                    }
                }
            }

            else if (req.url.startsWith('/Comparare')) {
                httpsMsg.getComparare(req, resp)
            }

            else if (req.url.startsWith('/api/judet')) {
                jud.query(req, resp)
            }

            break;
    }


    //}).listen(settings.webPort, function () {
    //   console.log("Started listening at: " + settings.webPort)

    //})
}).on('connection', function (socket) {
    socket.setTimeout(10000);
}).listen(settings.webPort, function () {
    console.log("Started listening at: " + settings.webPort)

})