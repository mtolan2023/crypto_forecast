

// Request data using D3
d3.csv('output/ltc_predict_30.csv').then(function(data) {
  console.log("ltc predict", data)

  const date = [];
  const observed = [];
  const predicted1 = [];
  const predicted2 = [];
  const predicted3 = [];

// pull row data from csv into arrays
  for (let i = 0; i < data.length; i++) {
     date.push(data[i].Date)
     observed.push(data[i].observed)
     predicted1.push(data[i].model_1_predicted)
     predicted2.push(data[i].model_2_predicted)
     predicted3.push(data[i].model_3_predicted)
   };

// Build plot
var trace1 = {
  x: date,
  y: observed,
  name: 'Observed',
  line: {
    color: 'blue',
    width: 2
  },
  type: 'scatter'
};

var trace2 = {
  x: date,
  y: predicted1,
  name: 'Model 1 Predicted',
  line: {
    color: 'red',
    width: 2
  },
  type: 'scatter'
};

var trace3 = {
  x: date,
  y: predicted2,
  name: 'Model 2 Predicted',
  line: {
    color: 'orange',
    width: 2
  },
  type: 'scatter'
};

var trace4 = {
  x: date,
  y: predicted3,
  name: 'Model 3 Predicted',
  line: {
    color: 'green',
    width: 2
  },
  type: 'scatter'
};

var layout = {
  title: {
    text:'Litecoin (LTC) Price Model Testing Performance'
  }
};

var data = [trace1, trace2, trace3, trace4];

Plotly.newPlot('ltc_predict', data, layout);

});










