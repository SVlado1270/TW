function get_csv_regiune() {
    var url = 'https://vvv1270.azurewebsites.net/' + 'Regiune' + '/' + sessionStorage.getItem('regiune');
    console.log(url)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.response)

            const items = json
            const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
            const header = Object.keys(items[0])
            let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
            csv.unshift(header.join(','))
            csv = csv.join('\r\n')

            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = sessionStorage.getItem('regiune') + '.csv';
            hiddenElement.click();

            console.log(csv)
        }
    };
    xhttp.open("GET", url, false);
    xhttp.send();
}

function get_xml_regiune() {
    function OBJtoXML(obj) {
        var xml = '';
        for (var prop in obj) {
            if (obj[prop] instanceof Array) {
                for (var array in obj[prop]) {
                    xml += '<' + prop + '>';
                    xml += OBJtoXML(new Object(obj[prop][array]));
                    xml += '</' + prop + '>';
                }
            } else {
                xml += '<' + prop + '>';
                typeof obj[prop] == 'object' ? xml += OBJtoXML(new Object(obj[prop])) : xml += obj[prop];
                xml += '</' + prop + '>';
            }
        }
        var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
        return xml;
    }


    var url = 'https://vvv1270.azurewebsites.net/' + 'Regiune' + '/' + sessionStorage.getItem('regiune');
    console.log(url)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.response)
            var temp = OBJtoXML(json)

            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(temp);
            hiddenElement.target = '_blank';
            hiddenElement.download = sessionStorage.getItem('regiune') + '.xml';
            hiddenElement.click();


            console.log(temp)
        }
    };
    xhttp.open("GET", url, false);
    xhttp.send();

}

function get_csv_judet() {
    var judet = sessionStorage.getItem('judet')
    judet = judet.toUpperCase()
    var url = 'https://vvv1270.azurewebsites.net/' + judet + '/' + sessionStorage.getItem('tip')
    console.log(url)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.response)

            const items = json
            const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
            const header = Object.keys(items[0])
            let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
            csv.unshift(header.join(','))
            csv = csv.join('\r\n')

            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = sessionStorage.getItem('judet') + '_' + sessionStorage.getItem('tip') + '.csv';
            hiddenElement.click();

            console.log(csv)
        }
    };
    xhttp.open("GET", url, false);
    xhttp.send();
}



function get_xml_judet() {
    function OBJtoXML(obj) {
        var xml = '';
        for (var prop in obj) {
            if (obj[prop] instanceof Array) {
                for (var array in obj[prop]) {
                    xml += '<' + prop + '>';
                    xml += OBJtoXML(new Object(obj[prop][array]));
                    xml += '</' + prop + '>';
                }
            } else {
                xml += '<' + prop + '>';
                typeof obj[prop] == 'object' ? xml += OBJtoXML(new Object(obj[prop])) : xml += obj[prop];
                xml += '</' + prop + '>';
            }
        }
        var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
        return xml;
    }

    var judet = sessionStorage.getItem('judet')
    judet = judet.toUpperCase()
    var url = 'https://vvv1270.azurewebsites.net/' + judet + '/' + sessionStorage.getItem('tip')
    console.log(url)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.response)
            var temp = OBJtoXML(json)

            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(temp);
            hiddenElement.target = '_blank';
            hiddenElement.download = sessionStorage.getItem('judet') + '_' + sessionStorage.getItem('tip') + '.xml';
            hiddenElement.click();


            console.log(temp)
        }
    };
    xhttp.open("GET", url, false);
    xhttp.send();

}
