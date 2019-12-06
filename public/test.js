const fs = require('fs');
const path = require('path');


//console.log(fs.readFile("hallo.txt"));

exports.ersterTest = () => {

    const hallo = fs.readFile("./public/hallo.txt", 'utf8', function(err, data) {
        
        if (err) throw err;

        //console.log('OK:' +)

        console.log(data);

    });

}

exports.getPictures = () => {


    var dataFileBuffer  = fs.readFileSync(__dirname + '/train-images.idx3-ubyte');
    var labelFileBuffer = fs.readFileSync(__dirname + '/train-labels-idx1-ubyte');
    var pixelValues     = [];

        // It would be nice with a checker instead of a hard coded 60000 limit here
        for (var image = 0; image <= 59999; image++) { 
            var pixels = [];

            for (var y = 0; y <= 27; y++) {
                for (var x = 0; x <= 27; x++) {
                    pixels.push(dataFileBuffer[(image * 28 * 28) + (x + (y * 28)) + 16]);
                }
            }

            var imageData  = {};
            imageData[JSON.stringify(labelFileBuffer[image + 8])] = pixels;

            pixelValues.push(imageData);
        }

        console.log(pixelValues[8]);


        // Zum testen wird die Datei abgespeichert
        fs.writeFile('pixelValues.txt', pixelValues, (err) =>  {

            if (err) throw err;

            console.log('saved');

        });


}
