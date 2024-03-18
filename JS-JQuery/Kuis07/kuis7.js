$(document).ready(function(){
    $('button#CLICK').click(function() {
        alert("you clicked me! lmfao!");
    });

    $('button#DBL').dblclick(function() {
        alert('YOU DID IT! XD');
    });

    $('button#hover').mouseenter(function() {
        alert("You Hover Me!");
    });

    $('button#hover').mouseleave(function() {
        alert("Where'd you go? I need you!");
    });

    $(document).ready(function() {
    let keyPressCount = 0;

    // Ketika tombol ditekan pada elemen input
    $("#myInput").keypress(function() {
        keyPressCount++;
        $("#keypressCount").text(keyPressCount);
    });
});
})