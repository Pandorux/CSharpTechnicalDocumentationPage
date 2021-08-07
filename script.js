
$(".dark-mode-button").on("click", function() {
    if($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".dark-mode-button").text("Dark Mode: Off");
    } else {
        $("body").addClass("dark");
        $(".dark-mode-button").text("Dark Mode: On");
    }
});