

// Request data using D3
d3.csv('output/eth_model.csv').then(function(data) {
    console.log("eth model data", data)

   
  const date = [];
  const observed = [];
  const future = [];
  const future2 = [];
  const future3 = [];
  const mean = [];



  for (let i = 0; i < data.length; i++) {
     date.push(data[i].Date)
     observed.push(data[i].observed)
     future.push(data[i].future_prediction)
     future2.push(data[i].future_prediction2)
     future3.push(data[i].future_prediction3)
     mean.push(data[i].mean)
   }

console.log("date", date)
console.log("observed", observed)
console.log("future", future)
console.log("future2", future2)
console.log("future3", future3)
console.log("mean", mean)

// Slice times to get start and end dates for metrics
var monthDate = date.slice(-37,)
var monthObs = observed.slice(-37,)
var monthFut = future.slice(-37,);
var monthFut2 = future2.slice(-37,);
var monthFut3 = future3.slice(-37,);
var monthMean = mean.slice(-37,);


let lastDay  = Number(observed.slice(-8,-7))
let lastPred = Number(future3.slice(-1))
let firstPred = Number(future3.slice(-7,-6))


let lastWeek = Number(observed.slice(-31,-30))
let lastMonth = Number(observed.slice(-61,-60))
let lastYear = Number(observed.slice(0,1))


// console.log('last day', lastDay)
// console.log('last predict', lastPred)
// console.log('first predict', firstPred)

// Color Labels for up/down
function changeColor(x) {
  if (x >= 0) {return 'green'}

  else return 'red'
};
// Cacluate metrics (need to convert string to float)
let predChange = parseFloat(((firstPred-lastDay)/lastDay)*100).toFixed(2)
let lastChange = parseFloat(((lastPred-lastDay)/lastDay)*100).toFixed(2)
let weekChange = parseFloat(((lastDay-lastWeek)/lastWeek)*100).toFixed(2)
let monthChange = parseFloat(((lastDay-lastMonth)/lastMonth)*100).toFixed(2)
let yearChange = parseFloat(((lastDay-lastYear)/lastYear)*100).toFixed(2)

// Insert calculations into html
var innerPred = document.getElementById('innerPred');
innerPred.style.color = changeColor(predChange);
innerPred.innerHTML += predChange +"%" ;

var innerPred = document.getElementById('innerPredWeek');
innerPred.style.color = changeColor(lastChange);
innerPred.innerHTML += lastChange +"%" ;

var innerWeek = document.getElementById('innerWeek');
innerWeek.style.color = changeColor(weekChange);
innerWeek.innerHTML += weekChange +"%" ;

var innerMonth = document.getElementById('innerMonth');
innerMonth.style.color = changeColor(monthChange);
innerMonth.innerHTML += monthChange +"%"  ;

var innerYear = document.getElementById('innerYear');
innerYear.style.color = changeColor(yearChange);
innerYear.innerHTML += yearChange +"%" ;

// console.log(monthChange)


// Color labeling for stock change
let preColor

if (lastPred > lastDay) {
    preColor = 'green'
  } else {
    preColor = 'red'
  }
         
// console.log(preColor)



// Build Plot
var trace1 = {
    x: date.slice(-28,),
    y: observed.slice(-28,),
    name: 'Observed',
    line: {
      color: '#0096FF',
      width: 3
    },
    type: 'scatter'
  };
  
  var trace2 = {
    x: date.slice(-28,),
    y: future3.slice(-28,),
    name: 'Predicted',
    line: {
      color: preColor,
      width: 3
    },
    type: 'scatter'
  };

  
var layout = {
    title: {
      text:'Ethereum (ETH) 7-Day Price Prediction (USD)',
    },
    xaxis: {
      title: {
        text: 'Date',
     },
    },
    yaxis: {
      title: {
        text: 'Price (USD)'
      },
    },
  };


  var data = [trace1, trace2];
  
  Plotly.newPlot('eth_model7', data, layout);
   

  var trace1 = {
    x: monthDate,
    y: monthObs,
    name: 'Observed',
    line: {
      color: '#0096FF',
      width: 3
    },
    type: 'scatter'
  };
  
  var trace2 = {
    x: monthDate,
    y: monthFut,
    name: 'Predicted Model 1',
    line: {
      color: 'red',
      width: 3
    },
    type: 'scatter'
  };

  var trace3 = {
    x: monthDate,
    y: monthFut2,
    name: 'Predicted Model 2',
    line: {
      color: 'orange',
      width: 3
    },
    type: 'scatter'
  };

  var trace4 = {
    x: monthDate,
    y: monthFut3,
    name: 'Predicted Model 3',
    line: {
      color: 'green',
      width: 3
    },
    type: 'scatter'
  };

  var trace5 = {
    x: monthDate,
    y: monthMean,
    name: 'Predicted Mean',
    line: {
      dash: 'dot',
      color: 'black',
      width: 3
    },
    type: 'scatter'
  };
  
var layout2 = {
    title: {
      text:'Ethereum (ETH) 7-Day Price Prediction Model Comparison (USD)',
    },
    xaxis: {
      title: {
        text: 'Date',
     },
    },
    yaxis: {
      title: {
        text: 'Price (USD)'
      },
    },
  };


  var data2 = [trace1, trace2, trace3, trace4, trace5];
  
  Plotly.newPlot('eth_model', data2, layout2);

});










