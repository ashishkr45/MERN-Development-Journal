const fs = require("fs");

function fetchData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject("Error: file not found!");
      } else {
        resolve(data);
      }
    });
  });
}

fetchData("files/a.txt") // request: promise object
  .then((data) => {
    const updatedCont = data.trim();
    fs.writeFile("files/a.txt", updatedCont, "utf-8", (err) => {
      if (err) {
        console.log("Error: Unable to update the file.");
      } else {
        console.log("File updated successfully!");
      console.log(updatedCont);
      }
    });
}).catch((error) => {
  console.log(error);
});