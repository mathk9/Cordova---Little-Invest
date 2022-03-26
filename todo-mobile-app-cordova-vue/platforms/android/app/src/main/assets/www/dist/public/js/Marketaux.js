var title = ''
var content = ''
var url = ''

function consultAPI() {
    $.getJSON('https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=6ExpMApXL0AYAYWTboWzJ6sPaODYFZkPUXIMjAlg')
    .done(function(data){
        console.log(data)
        var date = data["data"]
        console.log(date)
        var news_container = document.getElementById("news_container")
        news_container.innerHTML = ''
        let b = 2;
        for(var d in date){
            if(b-- >= 0){
                var value = date[d];
                console.log(value["title"])
                title = value["title"]
                content = value["snippet"]
                url = value["source"]
                drawTable2()
            }
        }
    })
}

function drawTable2() {
    var news_container = document.getElementById("news_container")    
    news_container.innerHTML +=     '<div class="card" style="background-color:transparent;padding: 1px;">'+
                                    '<h5 class="card-header">'+title+'</h5>'+
                                    '<div class="card-body">'+
                                    '<h6 class="card-title">'+content+'</h6>'+
                                    '<p class="card-text">Fonte: '+url+'</p>'+
                                    '</div>'+
                                    '</div>'
}