console.log("hello world");

const fs = require("fs");

fs.writeFile("message.txt","hello",(err, data) => {
    if (err) throw err;
    console.log("the file has been saved!");
});