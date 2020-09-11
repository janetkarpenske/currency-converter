import { ConverterService } from './conv-service.js';

export function calcConversion(dollars, currType, conversions) {
  if (currType === "Euro") {
    console.log(conversions.KRW);
  }
  if (currType === "Australian Dollar") {

  }
  if (currType === "South Korean Won") {

  }
  if (currType === "Mexican Peso") {

  }
  if (currType === "Peruvian Sol") {

  }
}

export function handleConversions(dollars, currType) {
  let promise = ConverterService.getExchange();
  
  promise.then(function(response) {
    const body = JSON.parse(response);
    console.log(body.conversion_rates);
    let conversions = body.conversion_rates;
    let result = calcConversion(dollars, currType, conversions);
    }
  }, function(error) {
    result = `There was an error processing your request: ${error}`;
  });

  console.log("Promise: " + promise);
  //console.log("Result before return: " + result);
  //return result;
}

