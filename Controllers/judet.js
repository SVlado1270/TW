var db = require('../core/db')
var httpMsgs = require('../core/httpMsgs')

exports.getList = function (req, resp) {
    db.executeSql("SELECT * FROM varste", function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        }
        else {
            resp.writeHead(200, { "Content-Type": "application/json" })
            resp.write(JSON.stringify(data));
            resp.end();
        }
    }
    )
};


//aaaaaaaaaaaaaaaaaa


function getColoane(url) {
    const parsedUrl = new URL(`https://www.dummyurl.dummy/${url}`) // i just need to parse the args
    var coloane = parsedUrl.searchParams.get('coloane')
    if (coloane) {
        return coloane.split(',')
    }
    return []
}

function getLuni(url) {
    const parsedUrl = new URL(`https://www.dummyurl.dummy/${url}`)
    var luni = parsedUrl.searchParams.get('luni')
    if (luni) {
        return luni.split('&')
    }
    return []
}


var coloane_valide = {
    rata: ['luna', 'an', 'judet', 'Numar_total_someri', 'Numar_total_someri_femei', 'Numar_total_someri_barbati', 'Numar_someri_indemnizati', 'Numar_someri_neindemnizati', 'Rata_somajului', 'Rata_somajului_Feminina', 'Rata_somajului_Masculina'],
    varste: ['luna', 'an', 'judet', 'TOTAL', 'Sub_25_ani', 'ani_25_29', 'ani_30_39', 'ani_40_49', 'ani_50_55', 'peste_55_ani'],
    medii: ['luna', 'an', 'JUDET', 'NUMAR_TOTAL_SOMERI', 'NUMAR_TOTAL_SOMERI_FEMEI', 'NUMAR_TOTAL_SOMERI_BARBATI', 'NUMAR_TOTAL_SOMERI_DIN_MEDIUL_URBAN', 'NUMAR_SOMERI_FEMEI_DIN_MEDIUL_URBAN', 'NUMAR_SOMERI_BARBATI_DIN_MEDIUL_URBAN', 'NUMAR_TOTAL_SOMERI_DIN_MEDIUL_RURAL', 'NUMAR_SOMERI_FEMEI_DIN_MEDIUL_RURAL', 'NUMAR_SOMERI_BARBATI_DIN_MEDIUL_RURAL'],
    educatie: ['luna', 'an', 'JUDET', 'Total_someri_din_care', 'fara_studii', 'invatamant_primar', 'invatamant_gimnazial', 'invatamant_liceal', 'invatamant_posticeal', 'invatamant_profesional/arte_si_meserii', 'invatamant_universitar']
}

function createQuery(numeJudet, criteriu, coloane, luni) {
    query = 'SELECT '

    if (coloane.length > 0) {
        for (const coloana of coloane) {
            if (coloane_valide[criteriu].includes(coloana)) {
                query += coloana + ','
            } else return 'Invalid URL'
        }
        query = query.substring(0, query.length - 1)
    } else {
        query += '*'
    }

    query += ` FROM ${criteriu.toUpperCase()}`

    query += ` WHERE JUDET='${numeJudet.toUpperCase()}'`
    if (luni.length > 0) {
        for (const luna of luni) {
            query += ` AND luna IN (${luna})`
        }
    } else if (luni.length === 1) {
        for (const luna of luni) {
            query += ` AND luna = ${luna}`
        }
    } else if (luni.length === 0) {
        query += ''
    } else return 'Invalid month'
    return query
}


// /api/judet/iasi?filtru=varste&coloane=peste55,sub25,interval25_30&luni=1,2,3
exports.query = function (req, resp) {
    var criterii = ['educatie', 'varste', 'rata', 'medii']
    var judete = ['IASI', 'BOTOSANI', 'BACAU', 'VASLUI', 'GALATI', 'TULCEA', 'CONSTANTA', 'IALOMITA', 'BRAILA', 'BUCURESTI', 'SATUMARE', 'VRANCEA', 'NEAMT', 'SUCEAVA', 'BISTRITA', 'MARAMURES', 'MURES', 'HARGHITA', 'COVASNA', 'BUZAU', 'PRAHOVA', 'ILFOV', 'DAMBOVITA', 'CARAS', 'BRASOV', 'GIURGIU', 'TELEORMAN', 'OLT', 'DOLJ', 'ALBA', 'MEHEDINTI', 'VALCEA', 'ARGES', 'SIBIU', 'CLUJ', 'SALAJ', 'BIHOR', 'ARAD', 'TIMIS', 'HUNEDOARA', 'CALARASI']


    for (const criteriu of criterii) {
        for (const nume_judet of judete) {
            if (req.url.toUpperCase().startsWith(`/api/judet/${nume_judet}?${criteriu}`.toUpperCase())) {
                console.log(`API ${nume_judet}`)
                coloane = getColoane(req.url)
                luni = getLuni(req.url)
                console.log(coloane)
                console.log(luni)
                console.log(criteriu)
                query = createQuery(nume_judet, criteriu, coloane, luni)
                if (query === 'Invalid URL') {
                    httpMsgs.show500(req, resp)
                } else {
                    db.executeSql(query, (data, err) => {
                            resp.writeHead(200, { "Content-Type": "application/json" })
                            resp.write(JSON.stringify(data));
                            resp.end()
                    }) 
                }
            }
        }
    }
}
