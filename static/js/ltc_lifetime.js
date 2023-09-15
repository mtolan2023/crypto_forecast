

// Request data using D3
d3.csv('output/ltc_lifetime.csv').then(function(data) {
    console.log(data)

    const date = [];
    const close = [];

// Pull data from CSV
    for (let i = 0; i < data.length; i++) {
       date.push(data[i].Date)
       close.push(data[i].Close)

     }

console.log("date", date)
console.log("close", close)

// Build Plot
var trace1 = {
    x: date,
    y: close,
    name: 'Adjusted Close',
    line: {
      color: 'Blue',
      width: 2
    },
    type: 'scatter'
  };
  
var layout = {
    title: 'Litecoin Adjusted Price (USD)'
  };

  var data = [trace1];
  
  Plotly.newPlot('ltc_lifetime', data, layout);

});





















