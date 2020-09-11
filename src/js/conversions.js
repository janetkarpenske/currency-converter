import { ConverterService } from './conv-service.js';

export function handleConversions(dollars, currType) {
  let result;
  let promise = ConverterService.getExchange(dollars, currType);
  promise.then(function(response) {
    const body = JSON.parse(response);

    //This is where you tell it what to do when it's successful.
    result = "It worked..."
    
  }, function(error) {
    result = `There was an error processing your request: ${error}`;
  });
  console.log(result);
  //return result;
}

