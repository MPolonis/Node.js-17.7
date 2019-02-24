var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function (err, files) {
    console.log('This is the list of files in this folder'.blue)
    if (err) throw err;
    console.log(files);
    fs.writeFile('listOfFiles.txt', files, (err) => {
        if (err) throw err;
        console.log('The list has been saved in listOfFiles!'.blue);
    });
});