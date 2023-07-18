// Update METAR every 5 minutes

function updateMetar() {
    let metar = "SPECI KIAH 141319Z 17004KT 10SM BKN025 BKN250 13/12 A2999 RMK A02 T01280122";
    let metarText = document.getElementById("metarText");
    metarText.innerHTML = metar;
}
updateMetar();
setInterval(updateMetar, 300000)