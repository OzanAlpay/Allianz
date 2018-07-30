/*!
 * Start Bootstrap - Allianz ICS v0.0.1 (http://www.allianz.com)
 * Copyright 2013-2018 Jawad Tahir
 * Licensed under  ()
 */
var USER;
$(function() {
    $('#side-menu').metisMenu();
    
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    function getUser(){
        USER = new Object();
        USER.userId = $('#userId').text();
        USER.userOe = $('#userOe').text();
        USER.name = $('#userName').text();
        USER.role = $('#userRole').text();
    }

    

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }

    getUser();
});


function getBillHIst(){
    var billId = $('#search-box').val().trim();
    window.location.replace("http://localhost:30001/ics/billhist/"+billId);
    

}