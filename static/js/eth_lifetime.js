

// Request data using D3
d3.csv('output/eth_lifetime.csv').then(function(data) {
    console.log("eth lifetime", data)

    const date = [];
    const close = [];

// Pull data from csv
    for (let i = 0; i < data.length; i++) {
       date.push(data[i].Date)
       close.push(data[i].Close)

     }

console.log("date", date)
console.log("close", close)

// Build plot
var trace1 = {
    x: date,
    y: close,
    name: 'Adjusted Close',
    line: {
      color: '#0096FF',
      width: 2
    },
    type: 'scatter'
  };
  
var layout = {
    title: 'Ethereum Adjusted Price (USD)'
  };

  var data = [trace1];
  
  Plotly.newPlot('eth_lifetime', data, layout);

});










