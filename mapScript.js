var map = document.getElementById("romaniaMap");
map.addEventListener("load", function() {

    var svgDoc = this.getSVGDocument();

    var iasi = svgDoc.getElementById("sm_state_Iasi");
    var alba = svgDoc.getElementById("sm_state_Alba");
    var arad = svgDoc.getElementById("sm_state_Arad");
    var arges = svgDoc.getElementById("sm_state_Arges");
    var bacau = svgDoc.getElementById("sm_state_Bacau");
    var bihor = svgDoc.getElementById("sm_state_Bihor");
    var bistritaNasaud = svgDoc.getElementById("sm_state_BistritaNasaud");
    var botosani = svgDoc.getElementById("sm_state_Botosani");
    var brasov = svgDoc.getElementById("sm_state_Brasov");
    var braila = svgDoc.getElementById("sm_state_Braila");
    var bucuresti = svgDoc.getElementById("sm_state_Bucuresti");
    var buzau = svgDoc.getElementById("sm_state_Buzau");
    var carasSeverin = svgDoc.getElementById("sm_state_CarasSeverin");
    var calarasi = svgDoc.getElementById("sm_state_Calarasi");
    var cluj = svgDoc.getElementById("sm_state_Cluj");
    var constanta = svgDoc.getElementById("sm_state_Constanta");
    var covasna = svgDoc.getElementById("sm_state_Covasna");
    var dambovita = svgDoc.getElementById("sm_state_Dambovita");
    var dolj = svgDoc.getElementById("sm_state_Dolj");
    var galati = svgDoc.getElementById("sm_state_Galati");
    var giurgiu = svgDoc.getElementById("sm_state_Giurgiu");
    var gorj = svgDoc.getElementById("sm_state_Gorj");
    var harghita = svgDoc.getElementById("sm_state_Harghita");
    var hunedoara = svgDoc.getElementById("sm_state_Hunedoara");
    var ialomita = svgDoc.getElementById("sm_state_Ialomita");
    var ilfov = svgDoc.getElementById("sm_state_Ilfov");
    var maramures = svgDoc.getElementById("sm_state_Maramures");
    var mehedinti = svgDoc.getElementById("sm_state_Mehedinti");
    var mures = svgDoc.getElementById("sm_state_Mures");
    var neamt = svgDoc.getElementById("sm_state_Neamt");
    var olt = svgDoc.getElementById("sm_state_Olt");
    var prahova = svgDoc.getElementById("sm_state_Prahova");
    var satuMare = svgDoc.getElementById("sm_state_SatuMare");
    var salaj = svgDoc.getElementById("sm_state_Salaj");
    var sibiu = svgDoc.getElementById("sm_state_Sibiu");
    var suceava = svgDoc.getElementById("sm_state_Suceava");
    var teleorman = svgDoc.getElementById("sm_state_Teleorman");
    var timis = svgDoc.getElementById("sm_state_Timis");
    var tulcea = svgDoc.getElementById("sm_state_Tulcea");
    var vaslui = svgDoc.getElementById("sm_state_Vaslui");
    var valcea = svgDoc.getElementById("sm_state_Valcea");
    var vrancea = svgDoc.getElementById("sm_state_Vrancea");

    iasi.addEventListener("mousedown", function() {
        location.assign('./judet/IASI')

    }, false);
    alba.addEventListener("mousedown", function() {
        location.assign('./judet/ALBA')
    }, false);

    arad.addEventListener("mousedown", function() {
        location.assign('./judet/ARAD')

    }, false);

    arges.addEventListener("mousedown", function() {
        //alert('arges')
        location.assign('./judet/ARGES')

    }, false);

    bacau.addEventListener("mousedown", function() {
        //alert('bacau')
        location.assign('./judet/BACAU')

    }, false);

    bihor.addEventListener("mousedown", function() {
        //alert('bihor')
        location.assign('./judet/BIHOR')

    }, false);

    bistritaNasaud.addEventListener("mousedown", function() {
        //alert('bistrita')
        location.assign('./judet/BISTRITA')

    }, false);

    botosani.addEventListener("mousedown", function() {
        //alert('botosani')
        location.assign('./judet/BOTOSANI')

    }, false);

    brasov.addEventListener("mousedown", function() {
        // alert('brasov')
        location.assign('./judet/BRASOV')

    }, false);

    braila.addEventListener("mousedown", function() {
        //alert('braila')
        location.assign('./judet/BRAILA')

    }, false);

    bucuresti.addEventListener("mousedown", function() {
        //alert('bucale')
        location.assign('./judet/BUCURESTI')

    }, false);

    buzau.addEventListener("mousedown", function() {
        //alert('buzau')
        location.assign('./judet/BUZAU')


    }, false);

    carasSeverin.addEventListener("mousedown", function() {
        //alert('caras')
        location.assign('./judet/CARAS')

    }, false);

    calarasi.addEventListener("mousedown", function() {
        //alert('calarasi')
        location.assign('./judet/CALARASI')

    }, false);

    cluj.addEventListener("mousedown", function() {
        // alert('cluj')
        location.assign('./judet/CLUJ')

    }, false);

    constanta.addEventListener("mousedown", function() {
        //alert('constanta')
        location.assign('./judet/CONSTANTA')

    }, false);

    covasna.addEventListener("mousedown", function() {
        //alert('covasna')
        location.assign('./judet/COVASNA')

    }, false);

    dambovita.addEventListener("mousedown", function() {
        //alert('dambovita')
        location.assign('./judet/DAMBOVITA')

    }, false);

    dolj.addEventListener("mousedown", function() {
        //alert('dolj')
        location.assign('./judet/DOLJ')

    }, false);

    galati.addEventListener("mousedown", function() {
        //alert('galati')
        location.assign('./judet/GALATI')

    }, false);

    giurgiu.addEventListener("mousedown", function() {
        //alert('giurgiu')
        location.assign('./judet/GIURGIU')

    }, false);

    gorj.addEventListener("mousedown", function() {
        //alert('gorj')
        location.assign('./judet/GORJ')

    }, false);

    harghita.addEventListener("mousedown", function() {
        //alert('harghita')
        location.assign('./judet/HARGHITA')

    }, false);

    hunedoara.addEventListener("mousedown", function() {
        //alert('hunedoara')
        location.assign('./judet/HUNEDOARA')

    }, false);

    ialomita.addEventListener("mousedown", function() {
        //alert('ialomita')
        location.assign('./judet/IALOMITA')

    }, false);

    ilfov.addEventListener("mousedown", function() {
        //alert('ilfov')
        location.assign('./judet/ILFOV')

    }, false);

    maramures.addEventListener("mousedown", function() {
        //alert('maramures')
        location.assign('./judet/MARAMURES')

    }, false);

    mehedinti.addEventListener("mousedown", function() {
        //alert('mehedinti')
        location.assign('./judet/MEHEDINTI')

    }, false);

    mures.addEventListener("mousedown", function() {
        //alert('mures')
        location.assign('./judet/MURES')

    }, false);

    neamt.addEventListener("mousedown", function() {
        //alert('neamt')
        location.assign('./judet/NEAMT')

    }, false);

    olt.addEventListener("mousedown", function() {
        location.assign('./judet/OLT')

    }, false);

    prahova.addEventListener("mousedown", function() {
        // alert('prahova')
        location.assign('./judet/PRAHOVA')

    }, false);

    satuMare.addEventListener("mousedown", function() {
        //alert('satu mare')
        location.assign('./judet/SATUMARE')

    }, false);

    salaj.addEventListener("mousedown", function() {
        //alert('salaj')
        location.assign('./judet/SALAJ')

    }, false);

    sibiu.addEventListener("mousedown", function() {
        //alert('sibiu')
        location.assign('./judet/SIBIU')

    }, false);

    suceava.addEventListener("mousedown", function() {
        //alert('suceava')
        location.assign('./judet/SUCEAVA')

    }, false);

    teleorman.addEventListener("mousedown", function() {
        location.assign('./judet/TELEORMAN')

    }, false);

    timis.addEventListener("mousedown", function() {
        location.assign('./judet/TIMIS')

    }, false);

    tulcea.addEventListener("mousedown", function() {
        //alert('tulcea')
        location.assign('./judet/TULCEA')
    }, false);

    vaslui.addEventListener("mousedown", function() {
        //alert('vaslui')
        location.assign('./judet/VASLUI')
    }, false);

    valcea.addEventListener("mousedown", function() {
        //alert('valcea')
        location.assign('./judet/VALCEA')
    }, false);

    vrancea.addEventListener("mousedown", function() {
        //alert('vrancea')
        location.assign('./judet/VRANCEA')
    }, false);

}, false);