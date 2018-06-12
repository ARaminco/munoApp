// Initialize app
var myApp = new Framework7({

});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
})


$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
});


$$(document).on('pageInit', '.page[data-page="sbio"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    var sid = document.getElementById('singerid').innerText;

    var munoJason = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            munoJason = this.responseText ;
            var munoArray = JSON.parse(munoJason);
            document.getElementById('biotext').innerHTML =  munoArray.biotext ;
            document.getElementById('bioName').innerHTML =  munoArray.bioname ;
            document.getElementById('bioTavalod').innerHTML =  munoArray.biotavalod ;
            document.getElementById('bioSabk').innerHTML =  munoArray.biosabk ;
            document.getElementById('biophoto').src =  munoArray.biophoto ;

        }
    };
    xhttp.open("GET", "http://muno.ir/WS/bio.php?sid="+ sid, true);
    xhttp.send();
})
