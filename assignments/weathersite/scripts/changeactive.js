//remember to add an ID of "mainmenu" to the nav ul
var URLString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF=urlArray[urlArray.length-1];

if (pageHREF !=="") {
    var menu = document.querySelectorAll('ul#primaryNav li a');
    var i;
    //loop through all the menu items in the navigation
    for(i=0; i<menu.length; i++) {
        var currentURL=(menu[i].getAttrbute("href"));
        menu[i].parentNode.className=""; //turn off highlighting by default
        if (currentURL===pageHREF) {
            menu[i].parentNode.className="active"; //turn on if a match
        } // end if
    } // end of the search for a match
} // end of if
