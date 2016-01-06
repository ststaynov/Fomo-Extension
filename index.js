//Tabs
var tabs = require("sdk/tabs");

var loaded = '';
var newTab = ["Nieuw tabblad", "New tab"];
//Lists
var blacklistStartsWith = [
    "Facebook", 
    "Twitter", 
    "WhatsApp"
];
var blacklistContains = [
    
];

function writeToFile () {

    // write to file
    var fs = require('sdk/io/fs');
    fs.writeFile("C:\\Users\\ststa\\Desktop\\Fomo-Extension\\text.txt", "1", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 

};

tabs.on('activate', function(tab) {
    if (newTab.indexOf(tab.title) == -1 && loaded != tab.title) {
        loaded = tab.title;
        console.log("Activated tab: ", tab.title);
        checkBlackLists(tab.title, tab.url);
        
    }
});

tabs.on('ready', function(tab) {
    loaded = tab.title;
    if (newTab.indexOf(tab.title) == -1) {
        console.log("Loaded: ", tab.title);
        checkBlackLists(tab.title, tab.url);
    }
});


/*
 *@param tabName string This string contains the tab name that should be held against the blacklists.
 *@param tabUrl string This string contains the tab URL that should be held against the blacklists.
 *@return boolean Returns true if a blacklisted item is detected.
*/
function checkBlackLists (tabName, tabUrl) {
    console.log("Checking ", tabUrl);
    //List
    var blacklistContains = [
        "facebook",
        "twitter", 
        "whatsapp"
    ];
    
    for (var j = 0; j < blacklistContains.length; j++){
        if (tabUrl.indexOf(blacklistContains[j]) > -1) {
            console.log("Detected ", blacklistContains[j], " in ", tabName);
            writeToFile();
        }
    };
};