function getRegiune1(url) {
    const parsedUrl = new URL(`https://www.dummyurl.dummy/${url}`) // i just need to parse the args
    var jud = parsedUrl.searchParams.get('regiune1')
    if (jud) {
        return jud.split(',')
    }
    return []
}

function getRegiune2(url) {
    const parsedUrl = new URL(`https://www.dummyurl.dummy/${url}`) // i just need to parse the args
    var jud = parsedUrl.searchParams.get('regiune2')
    if (jud) {
        return jud.split(',')
    }
    return []
}

function getChart_type(url) {
    const parsedUrl = new URL(`https://www.dummyurl.dummy/${url}`) // i just need to parse the args
    var jud = parsedUrl.searchParams.get('chart')
    if (jud) {
        return jud.split(',')
    }
    return []
}

function getPerioada(url) {
    const parsedUrl = new URL(`https://www.dummyurl.dummy/${url}`) // i just need to parse the args
    var jud = parsedUrl.searchParams.get('perioada')
    if (jud) {
        return jud.split(',')
    }
    return []
}

function updateChart_type(url, newVal) {
    url += '';
    var temp = url.split('?');
    var url1 = temp[0];
    var url2 = temp[1];
    var si = '';
    var newArgumente = '';
    var argumente = url2.split('&');
    for (arg of argumente) {
        if (arg.split('=')[0] != 'chart') {
            newArgumente = newArgumente + si + arg;
            si = '&';
        }
    }
    var newUrl = url1 + '?' + newArgumente + '&chart=' + newVal;
    location.assign(newUrl);

}

function updatePerioada(url, newVal) {
    var temp = url.split('?');
    var url1 = temp[0];
    var url2 = temp[1];
    var si = '';
    var newArgumente = '';
    var argumente = url2.split('&');
    for (arg of argumente) {
        if (arg.split('=')[0] != 'perioada') {
            newArgumente = newArgumente + si + arg;
            si = '&';
        }
    }
    var newUrl = url1 + '?' + newArgumente + '&perioada=' + newVal;
    location.assign(newUrl);

}