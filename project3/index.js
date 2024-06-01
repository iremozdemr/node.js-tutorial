/* 
1- use the inquirer npm package to get user input
2- use the qr-image npm package to turn the user entered url into a qr code image
3- create a txt file to save the user input using the native fs node module
*/
 
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "type in your url: ",
        name: "url",
    }
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));
  })
  .catch((error) => {
    if(error.isTtyError){
    } 
    else{
    }
  });