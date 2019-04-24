// from data.js
var tableData = myData;

// YOUR CODE HERE!

var table = document.getElementById("ufo-table");

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let data = Object.keys(myData[0]);
generateTable(table, myData);

// Find a <table> element with id="myTable":
// var table = document.getElementById("ufo-table");

// Create an empty <tr> element and add it to the 1st position of the table:
// var row = table.insertRow(0);

// // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:

// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);

// Add some text to the new cells:
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";



// var L_dateTime = data.map(field => field.datetime);
// var L_cities = data.map(field => field.city);
// var L_states = data.map(field => field.state);
// var L_countries = data.map(field => field.country);
// var L_shapes = data.map(field => field.shape);
// var L_durations = data.map(field => field.durationMinutes);
// var L_comments = data.map(field => field.comments);

//counter = 0;




// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";

// for(let i = 0; i = 7; i++){
//         var cell = row.insertCell(i);
//             // Add some text to the new cells:
//             for(let j = 0; j = data.length; j++){
//             cell.innerHTML = city;
//         }
//         counter += 1;
//         };
// data.forEach(function(items) {
    
// for (var i = 1; i = 111; i++) {
//    //iterate through rows
//    var row = table.insertRow(-1);
//     console.log(row)
//    //rows would be accessed using the "row" variable assigned in the for loop
//    row.forEach(function(cell){
//      //iterate through columns
//     //  table.append(Object.values(items)[j]);
//      console.log(items)
//     //  if (col.cells[j].text == 'Date'){
//     //      console.log("it worked")
//     //  }
//     })
//     //  console.log(col)
//     //  console.log(j)

//      //columns would be accessed using the "col" variable assigned in the for loop
//    }  

// });

// var table = document.getElementById("ufo-table"), tr, td, i;

// for (i = 1; i < 21; i++) { 
//     if (i % 7 == 0) { // every 22nd cell (including the first)
//         tr = table.appendChild(document.createElement('tr')); // add a new row
//     }
//     td = tr.appendChild(document.createElement('td'));
//     td.innerHTML = i + 1;
// }
// document.getElementById('container').appendChild(table);
// for (var i = 1, row; row = table.rows[i]; i++) {
//     //iterate through rows
//     //rows would be accessed using the "row" variable assigned in the for loop
//     for (var j = 0, col; col = row.cells[j]; j++) {
//       //iterate through columns
//      //  if (col.cells[j].text == 'Date'){
//      //      console.log("it worked")
//      //  }
     
//       console.log(col)
//       console.log(j)
//       //columns would be accessed using the "col" variable assigned in the for loop
//     }  
//  }

// L_cities.forEach(function(city) {
//     // Add each city to the ratings count

    
//     // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
//     for(let i = 0; i <= 6; i++){
//         var cell = row.insertCell(i);
//         // Add some text to the new cells:
//         cell.innerHTML = city;
//         counter += 1;
//      }
//   });
// console.log(city)


//var cities = [];
// // Iterate through each recipe object
// data.forEach((items) => {

//     // Iterate through each key and value
//     Object.entries(items).forEach(([key, value]) => {
  
//       // Use the key to determine which array to push the value to
//       if (key === "city") {
//         cities.push(value);
//       }

//      });
//   });
// console.log(L_cities)


// data.forEach(function(items) {
//     console.log(items.city)
//     $("th").append("<td> test </td>");
//     d3.select(".table-head")
//         .append("td").text(`${items.city}`)
//     });


// console.log(L_dateTime);
// console.log(L_cities);
// console.log(L_states);
// console.log(L_countries);
// console.log(L_shapes);
// console.log(L_durations);
// console.log(L_comments);

