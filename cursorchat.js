/*
Cursorchat.js v1.0.0 created by Cursors. All rights reserved.
Note: this is a jQuery add-on
*/
jQuery.fn.cursorchat = function(p, e) {
    var apiUrl = "https://www.khanacademy.org/api/internal/discussions/";
    var postKey = p;
    apiUrl += postKey + "/replies?casing=camel";
    $.getJSON(apiUrl + "&callback=?", function(data) {
        for (var i = 0; i < data.length; i++) {
            $(e).append($("<div>").addClass("faq").append($("<p>").html(data[i].content)).append($("<small>").text(" by " + data[i].authorNickname)).append($("<hr>")));
        }
    };
    return this;
};
