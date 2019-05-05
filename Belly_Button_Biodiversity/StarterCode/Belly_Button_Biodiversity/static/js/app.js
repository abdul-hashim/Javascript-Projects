function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    var getData = d3.select("#sample-metadata");
    d3.json(`/metadata/${sample}`).then((datas) => {
      console.log(datas);
      for (let key in datas) {
        getData
          .append(key)
          .html("test")
          .text(key.toUpperCase() + ':', datas[key])
        console.log(key.toUpperCase() + ':', datas[key]);
      }
    });
    // Use `.html("") to clear any existing metadata
    getData.html("")
    // Use `Object.entries` to add each key and value pair to the panel
    
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  var getData = d3.select("#sample-metadata");
    // @TODO: Build a Bubble Chart using the sample data
    
    var data = [getData];
    
    var layout = {
      title: 'Bubble Chart',
      showlegend: false,
    };
    
    Plotly.newPlot('bubble', data, layout);
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).

    var piedata = [{
      values: [10, 20, 30],
      labels: ['test1', 'test2', 'test3'],
      type: 'pie'
    }];
    
    var layout = {
      title: "Pie Chart"
    };
    
    Plotly.newPlot('pie', piedata, layout);
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
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
