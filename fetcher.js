const request = require("request"); // use request library to make http request
const fs = require("fs"); // use Node's fs module to write the file
const args = process.argv.slice(2);
let path = args[1];

/* DO NOT USE SYNCHRONOUS FUNCTIONS OR THE PIPE FUNCTIONS:
please avoid writeFileSync functions!! (it's considered bad practice to use sync versions of functions that should be async!) */

const pageDownloader = function (callback) {

  request(args[0], (error, response, body) => {
    
    if (error) {
      callback(error);
    } else {
      callback(body);
    }
  });
};

pageDownloader((body) => {

  fs.writeFile(`${path}`, body, function(){
  console.log(`. . . Downloaded and saved 1235 bytes to ${path}!`)
  });
});