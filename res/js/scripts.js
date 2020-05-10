$('.cover').backstretch("static/images/rv.jpg");
new WOW().init();

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".nav-link").on("click", function(e) {
    if (e.currentTarget["id"] !== "navbarDropdown") {
        $(".navbar-collapse").toggleClass("show");
    }
});