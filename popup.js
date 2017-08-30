// function injectTheScript() {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         // query the active tab, which will be only one tab
//         //and inject the script in it
//         chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
//     });
// }
var refreshIntervalId;
var tabId;
// var timeStamp =  Date.now();
document.getElementById('startbutton').addEventListener('click', function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	tabId = tabs[0].id;

    	refreshIntervalId = setInterval(function() {
		// timeStamp = Date.now() - timeStamp;
		// var interval = timeStamp/1000;
		
		
        chrome.tabs.executeScript( tabId, {
        	
            code: "location.reload();"
        });
        // timeStamp =  Date.now();
    }, 2000);
    });
	
});

document.getElementById('stopbutton').addEventListener('click', function(){
	clearInterval(refreshIntervalId);
});