function getCurrencyData(){

    $.getJSON('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL/')
    .done(function(data){
        var valorBTC = document.getElementById('VcurrencyBTC')
        valorBTC.style = 'color: #C0C0C0'
        valorBTC.innerHTML =  'R$ '+data.BTCBRL['bid']

        var valorUSD = document.getElementById('VcurrencyUSD')
        valorUSD.style = 'color: #C0C0C0'
        valorUSD.innerHTML =  'R$ '+data.USDBRL['bid']

        var valorEUR = document.getElementById('VcurrencyEUR')
        valorEUR.style = 'color: #C0C0C0'
        valorEUR.innerHTML =  'R$ '+data.EURBRL['bid']
    })
}
