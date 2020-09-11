import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { ConverterService, calcConversion } from './conv-service.js';

function displayConv(dollars, convCurr, currType) {
  if (convCurr.length > 30) {
    $("#results").html(convCurr);
  } else {
  $("#results").html("$" + dollars);
  $("#resultsTwo").html(convCurr + " " + currType + "."); }
}
$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();
    const dollars = parseFloat($("#dollars").val());
    if (!dollars) {
      alert("Please enter a valid number.");
      return false;
    }
    const currType = $("#currType").val();
    let promise = ConverterService.getExchange();
    promise.then(function(response) {
      const body = JSON.parse(response);
      let conversions = body.conversion_rates;
      console.log(conversions);
      let result = calcConversion(dollars, currType, conversions);
      displayConv(dollars, result, currType);
      }, function(error) {
      $("#results").html(`There was an error processing your request: ${error}`);
    });
  });
});