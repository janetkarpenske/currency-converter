export class ConverterService {
  static getExchange() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
export function calcConversion(dollars, currType, conversions) {
  let result;
  if (currType === "EUR") {
    result = (dollars * conversions.EUR).toFixed(2);
  }
  else if (currType === "AUD") {
    result = (dollars * conversions.AUD).toFixed(2);
  }
  else if (currType === "KRW") {
    result = (dollars * conversions.KRW).toFixed(2);
  }
  else if (currType === "MXN") {
    result = (dollars * conversions.MXN).toFixed(2);
  }
  else if (currType === "PEN") {
    result = (dollars * conversions.PEN).toFixed(2);
  }
  else if (currType === "HRK") {
    result = (dollars * conversions.HRK).toFixed(2);
  }
  else if (currType === "ISK") {
    result = (dollars * conversions.ISK).toFixed(2);
  }
  else if (currType) {
    result = "Sorry, this type of currency is not supported in this program.";
  }
  return result;
}