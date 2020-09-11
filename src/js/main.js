import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import ConverterService from './conv-service.js';

// function displayConv(dollars, convCurr, currType) {
//   $("#results").html("$" + dollars + " is equal to " + convCurr + " " + currType + ".");
// }

$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();
    const dollars = parseInt($("#dollars").val());
    const currType = $("#currType").val();
    console.log(dollars, currType);
  });
});