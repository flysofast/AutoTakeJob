var intervalId = -1;
var tabId;
var interval = 3000;
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setBadgeText({
        text: ""
    });
    if (intervalId != -1) {
        clearInterval(intervalId);
        intervalId = -1;
        // chrome.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});
    } else {
    	automate();
        intervalId = setInterval(automate, interval);
 
        tabId = tab.id;
        chrome.browserAction.setBadgeText({
            text: "..."
        });
        // chrome.browserAction.setBadgeBackgroundColor({color:[0, 0, 0, 230]});
    }
});

function automate() {
    chrome.tabs.executeScript(tabId,{file: "content_script.js"} 
    // {

    //     code: "location.reload();var list = document.getElementsByClassName('pro_btn pro_success');var i =0; for(i=0;i<list.length;i++){if(list[i].textContent.trim().toUpperCase() == 'open'.toUpperCase()){var j=0;for(j=0;j<20;j++){setTimeout(function(){list[i].click();},j*500);} break;}}"
    // }
    , function(jobFound){
        if(jobFound){
            
            clearInterval(intervalId);
            chrome.browserAction.setBadgeText({
                text: ""
            });
            emailjs.send("gmail","th_ng_b_o_job_m_i_cubicasa",{to_name: "Dung", from_name: "Mr. Steal your jobs"});
            console.log('Da co job moi. Da email');
            alert('Da gui email');
        }
        else{
            console.log('Chua co bai moi');
        }
        
    });

}

emailjs.init("user_JoZWdljf3D2dmtQjqSDKf");

// parameters: service_id, template_id, template_parameters
// emailjs.send("gmail","template_cVDDxOMH",{to_name: "Dung", from_name: "Mr. Steal your jobs"});
// cecwuyocleaxvseb

// Email.send("anonymous.bvv@gmail.com",
// "anonymous.bvv@gmail.com",
// "This is a subject",
// "this is the body",
// "smtp.gmail.com",
// "lehainamm@gmail.com",
// "50d7eff3-c3f4-4d31-8a0b-8aa0a5516aa7");

// Email.send("anonymous.bvv@gmail.com",
// "lehainamm@gmail.com",
// "This is a subject",
// "this is the body",
// {token: "50d7eff3-c3f4-4d31-8a0b-8aa0a5516aa7"});

// Do once a minute ad infinitum
// intervalId = setInterval(annoyUser, 5000);