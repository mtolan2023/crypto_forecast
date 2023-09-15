

// Request data using D3
d3.csv('output/eth_predict.csv').then(function(data) {
    console.log(data)

    const date = [];
    const observed = [];
    const predicted = [];
    const future = [];

// Pull data from csv
    for (let i = 0; i < data.length; i++) {
       date.push(data[i].Date)
       observed.push(data[i].observed)
       predicted.push(data[i].predicted)
       future.push(data[i].future_prediction)
     }

// Build Plot
var trace1 = {
    x: date,
    y: observed,
    name: 'Observed',
    line: {
      color: '#0096FF',
      width: 3
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
      text:'Ethereum (ETH) Price Model Testing Performance'
    }
  };

  var data = [trace1, trace2];
  
  Plotly.newPlot('eth_predict', data, layout);

});










