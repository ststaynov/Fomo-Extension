var five = require("johnny-five"),
    board = new five.Board();

var myVar = setInterval(readTheFile, 1000);

var fs = require("fs");
var content;
function readTheFile(){
    
    fs.readFile("./text.txt","utf-8", function(err,data)
    {
     console.log(data);
     content = data;
    });
};

function writeToFile () {
    // write to file
    var fs = require("fs");
    fs.writeFile("./text.txt","2", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
};

board.on("ready", function() {
// fade out leds after they are turned on
function startCountDown(){
    setTimeout(function(){
        console.log("inTimeOut");
        gled.off();
        rled.off();
        writeToFile();
        isChanged = 2;
    }, 5000);
};


    var isChanged = content;
    var rled = new five.Led(12);
    var gled = new five.Led(13);
    var greenLoop = 0;

    this.loop(1000, function() {
                                  console.log("inloop " + greenLoop);
        greenLoop++;
        if (greenLoop > 20) {
            console.log("Green!");
            greenLoop = 0;
            gled.off();
            rled.on(500);
            startCountDown();
        }

        if(isChanged != content) {
                                  console.log("incontent");
            if (content == "1"){
                console.log("Red!");
                rled.off();
                gled.on(500);
                startCountDown();
                greenLoop = 0;
            }
        }
        });

  // Strobe the pin on/off, defaults to 100ms phases
  // led.strobe();
});