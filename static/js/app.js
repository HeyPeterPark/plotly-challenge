// functions were provided. only buildMetadata & buildCharts needed to be completed.
// initial comments are left intact and readme directions pasted in


// @TODO: Complete the following function that builds the metadata panel
function buildMetadata(sample) {

  // Use `d3.json` to fetch the metadata for a sample
  d3.json(`/metadata/${sample}`).then( (data) => {

    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(data).forEach( ([key, value]) => {

    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
      panel.append("h6").text(`${key}: ${value}`);
    });
    // ---------- this line is left commented out since I did not complete it.
    // BONUS: Build the Gauge Chart
//     buildGauge(data.WFREQ);
  });
}

function buildCharts(sample) {

  // Use `d3.json` to fetch the sample data for the plots
  d3.json(`/samples/${sample}`).then( (data) => {
    const otu_ids = data.otu_ids;
    const otu_labels = data.otu_labels;
    const sample_values = data.sample_values;

  // Create a PIE chart that uses data from your samples route (/samples/<sample>) to display the top 10 samples.
  // // Use sample_values as the values for the PIE chart.
  // // Use otu_ids as the labels for the pie chart.
  // // Use otu_labels as the hovertext for the chart.

    var dataPie = [{
        values: sample_values.slice(0, 10),
        labels: otu_ids.slice(0, 10),
        hovertext: otu_labels.slice(0, 10),
        hoverinfo: "hovertext",
        type: "pie"
      }];
    var layoutPie = {
      automargin: true
    };
    Plotly.plot("pie", dataPie, layoutPie);

  // Create a Bubble Chart that uses data from your samples route (/samples/<sample>) to display each sample.
  // // Use otu_ids for the x values.
  // // Use sample_values for the y values.
  // // Use sample_values for the marker size.
  // // Use otu_ids for the marker colors.
  // // Use otu_labels for the text values.

    var dataBubble = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "YIGnBu"
        }
      }];
      var layoutBubble = {
        hovermode: "closest",
        xaxis: { title: "OTU ID" }, 
        automargin: true
      };
      Plotly.plot("bubble", dataBubble, layoutBubble);
  });
}


// ---- everything under here was provided.

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then( (sampleNames) => {
    sampleNames.forEach( (sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
