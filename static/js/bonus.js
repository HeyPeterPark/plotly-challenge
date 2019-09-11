// // Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the Weekly Washing Frequency obtained from the /metadata/<sample>route.
// // // You will need to modify the example gauge code to account for values ranging from 0 - 9.
// // // Update the chart whenever a new sample is selected.

// function buildGauge(WFREQ) {

//   }



// Basic Gauge
var data = [{
  domain: {
      x: [0, 1], 
      y: [0, 1]
  }, 
  value: 270, 
  title: {text: "Speed"},
  type: "indicator", 
  mode: "gauge+number"
}];

var layout = {
  width: 500, 
  height: 500, 
  margin: {
    t: 0, 
    b: 0
  }
};

Plotly.newPlot(gd,data,layout);


// Added Steps, Threshold, and Delta
var data = [{
  domain: {
    x: [0, 1], 
    y: [0, 1]
  }, 
  value: 450, 
  title: {text: "Speed"},
  type: "indicator", 
  mode: "gauge+number+delta", 
  delta: {reference: 380}, 
  gauge:{
    axis: {
      range: [null, 500]
    }, 
    steps: [
      {
        range: [0, 250], 
        color: "lightgray"
      },
      {
        range: [250, 400], 
        color: "gray"
      }
    ], 
    threshold: {
      line: {
        color: "red", 
        width: 4
      },
      thickness: 0.75, 
      value: 490
    }
  }
}];

var layout = {
  width: 600, 
  height: 500, 
  margin: {
    t: 0, 
    b: 0
  }
};

Plotly.newPlot(gd,data,layout);


// Custom Gauge Chart
var data = [{
  domain: {
    x: [0, 1], 
    y: [0, 1]}, 
    value: 420, 
    title: {
      text: "Speed",
      font: {size: 24}
    }, 
    type: "indicator", 
    mode: "gauge+number+delta",
    delta: {
      reference: 400, 
      increasing: {
        color: "RebeccaPurple"}
    },
    gauge: {
      axis: {
        range: [null, 500], 
        tickwidth: 1, 
        tickcolor: "darkblue"
      },
    bar: {
      color: "darkblue"
    }, 
    bgcolor: "white", 
    borderwidth: 2, 
    bordercolor: "gray",
    steps: [
      {
        range: [0, 250], 
        color: 'cyan'
      }, 
      {
        range: [250, 400], 
        color: 'royalblue'
      }
    ], 
    threshold: {
      line: {
        color: "red", 
        width: 4
      }, 
      thickness: 0.75, 
      value: 490
    }
    }
}];

var layout = {
  width: 500, 
  height: 400, 
  margin: {
    t: 25, 
    r: 25, 
    l: 25, 
    b: 25
  },
  paper_bgcolor: "lavender", 
  font: {
    color: "darkblue", 
    family: "Arial"
  }
};

Plotly.newPlot(gd,data,layout);
