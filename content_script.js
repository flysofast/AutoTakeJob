location.reload();
var list = document.getElementsByClassName('pro_btn');
var i = 0;
for (i = 0; i < list.length; i++) {
    if (list[i].textContent.trim().toUpperCase() == 'take new job'.toUpperCase()) {
        var j = 0;
        for (j = 0; j < 100; j++) {
            setTimeout(function() {
                list[i].click();
            }, j * 30);
        }
        break;
    }
}
var jobFound = false;
for (i = 0; i < list.length; i++) {
    if (list[i].textContent.trim().toUpperCase() == 'deliver work'.toUpperCase()) {
        jobFound = true;
        
        break;
    }
}
jobFound