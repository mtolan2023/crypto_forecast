

// Request data using D3
d3.csv('output/btc_predict.csv').then(function(data) {
    console.log(data)

    const date = [];
    const observed = [];
    const predicted = [];
    const future = [];

// pull row data from csv into arrays
    for (let i = 0; i < data.length; i++) {
       date.push(data[i].Date)
       observed.push(data[i].observed)
       predicted.push(data[i].predicted)
       future.push(data[i].future_prediction)
     }

// Build plot
var trace1 = {
    x: date,
    y: observed,
    name: 'Observed',
    line: {
      color: 'purple',
      width: 2
    },
    type: 'scatter'
  };
  
  var trace2 = {
    x: date,
    y: predicted,
    name: 'Predicted',
    line: {
      color: 'orange',
      width: 2
    },
    type: 'scatter'
  };
  
  var layout = {
    title: {
      text:'Bitcoin (BTC) Price Model Testing Performance'
    }
  };

  var data = [trace1, trace2];
  
  Plotly.newPlot('btc_predict', data, layout);

});










