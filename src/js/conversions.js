import { ConverterService } from './conv-service.js';
export function handleConversions(dollars, currType) {
 
  let promise = ConverterService.getExchange(dollars, currType);


  promise.then(function(response) {
    const body = JSON.parse(response);
    console.log(body.conversion_rates);
    //This is where you tell it what to do when it's successful.
    result = "It worked...";
  }, function(error) {
    result = `There was an error processing your request: ${error}`;
  });

  console.log("Promise: " + promise);
  console.log("Result before return: " + result);
  return result;
}

