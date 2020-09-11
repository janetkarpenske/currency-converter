import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { handleConversionsm, calcConversion } from './conversions.js';

// function displayConv(dollars, convCurr, currType) {
//   $("#results").html("$" + dollars + " is equal to " + convCurr + " " + currType + ".");
// }

$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();
    const dollars = parseInt($("#dollars").val());
    const currType = $("#currType").val();
    console.log(dollars, currType);

    let convResult = handleConversions(dollars, currType);
    console.log("This is the final result: " + convResult);
  });
});