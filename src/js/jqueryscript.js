$(document).ready(function () {
    $("#down").click(function () {
        $("#down").fadeOut(1000);
    });
    $(window).scroll(function () {
        $("#down").fadeOut(1000);
    })
});