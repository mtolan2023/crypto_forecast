

// Request data using D3
d3.csv('output/scaled_comparison.csv').then(function(data) {
    console.log(data)

    const date = [];
    const nasdaq = [];
    const btc = [];
    const eth = [];
    const ltc = [];

// Pull row data from csv into lists
    for (let i = 0; i < data.length; i++) {
       date.push(data[i].Date)
       nasdaq.push(data[i].nasdaq)
       btc.push(data[i].btc)
       eth.push(data[i].eth)
       ltc.push(data[i].ltc)

     }

console.log("date", date)
console.log("nasdaq", nasdaq)
console.log("btc", btc)
console.log("eth", eth)
console.log("ltc", ltc)

// Build Plot
var trace1 = {
    x: date,
    y: btc,
    name: 'Bitcoin',
    line: {
      color: 'purple',
      width: 1.5
    },
    type: 'scatter'
  };


var trace2 = {
    x: date,
    y: eth,
    name: 'Ethereum',
    line: {
      color: '#0096FF',
      width: 1.5
    },
    type: 'scatter'
  };

var trace3 = {
    x: date,
    y: ltc,
    name: 'Litecoin',
    line: {
      color: 'blue',
      width: 1.5
    },
    type: 'scatter'
  };


  var trace4 = {
    x: date,
    y: nasdaq,
    name: 'NASDAQ',
    line: {
      color: 'orange',
      width: 1.5

    },
    type: 'scatter'
  };
  
var layout = {
    title: 'Scaled Price Comparison'
  };

  var data = [trace1, trace2, trace3, trace4];
  
  Plotly.newPlot('comp', data, layout);

});










