export class ConverterService {
  static getExchange(dollars, currType) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = "https://v6.exchangerate-api.com/v6/17cbb051b9f2e2655d10f97b/latest/USD";
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}




//`https://v6.exchangerate-api.com/${process.env.API_KEY}/latest/USD`