var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=eur",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.eur;
    eth.innerHTML = response.ethereum.eur;
    doge.innerHTML = response.dogecoin.eur;
});