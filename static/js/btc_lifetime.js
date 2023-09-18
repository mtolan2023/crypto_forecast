
// Request data using D3
d3.csv('output/btc_lifetime_30.csv').then(function(data) {
    console.log("btc lifetime", data)

    const date = [];
    const close = [];

// Split data into arrays
    for (let i = 0; i < data.length; i++) {
       date.push(data[i].Date)
       close.push(data[i].Close)

     }

console.log("date", date)
console.log("close", close)

// Built plot
var trace1 = {
    x: date,
    y: close,
    name: 'Adjusted Close',
    line: {
      color: 'purple',
      width: 3
    },
    type: 'scatter'
  };
  
var layout = {
    title: 'Bitcoin Adjusted Price (USD)'
  };

  var data = [trace1];
  
  Plotly.newPlot('btc_lifetime', data, layout);

});





















