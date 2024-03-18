$(document).ready(function() {
    // Hide Effect
    $("#hide").on('click', function() {
        $(".box").hide(1000);
    });

    // Show Effect
    $("#show").on('click', function() {
        $(".box").show(1000);
    });

    // Fade In Effect
    $("#fadeIn").on('click', function() {
        $(".box").fadeIn(1000);
    });

    // Fade Out Effect
    $("#fadeOut").on('click', function() {
        $(".box").fadeOut(1000);
    });

    // Slide Up Effect
    $("#slideUp").on('click', function() {
        $(".box").slideUp(1000);
    });

    // Slide Down Effect
    $("#slideDown").on('click', function() {
        $(".box").slideDown(1000);
    });
});
