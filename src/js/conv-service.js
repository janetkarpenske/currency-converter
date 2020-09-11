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
  if (currType === "Euro") {
    result = dollars * conversions.EUR
  }
  if (currType === "Australian Dollar") {
    result = dollars * conversions.AUD
  }
  if (currType === "South Korean Won") {
    result = dollars * conversions.KRW
  }
  if (currType === "Mexican Peso") {
    result = dollars * conversions.MXN
  }
  if (currType === "Peruvian Sol") {
    result = dollars * conversions.PEN
  }
  return result;
}