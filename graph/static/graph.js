
var biraArray = [
          ['Bira', ],
          ['Ilk O.',],
          ['Son O.',],
          ['Malt Miktari (KG)',],
          ['Hop Miktari (Gr)',],
          ['abv',],
          ['Kaynatma'],
          ['Mash (dk)',],
          ['Mayalama(℃)',],
        ]


fetch('/api/list')
.then(response => response.json())
.then(data => {const graphsArray = data['beer_object']

    for (var graph of graphsArray){
        const values = Object.values(graph)
        var counter = 0;
        for(var value of values){
            console.log(biraArray[counter])
            biraArray[counter].push(value)
            counter++
        }
    };
});


 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

        function drawVisualization() {
        var data = google.visualization.arrayToDataTable(biraArray);


        var options = {
          title : 'Biralarin Sayisal degerleri',
          vAxis: {title: 'Miktar'},
          hAxis: {title: 'Malzeme/is'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
