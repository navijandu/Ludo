$(document).ready(function () {
    //Creating step boxes with unquie IDs
    for (var i = 0; i < 18; i++) {
        $(".box1").append('<div class="step" onclick="posNum(this)" id="b' + i + '"></div>');

        $(".box2").prepend('<div class="step2" onclick="posNum(this)" id="y' + i + '"></div>');

        $(".box3").prepend('<div class="step" onclick="posNum(this)"  id="g' + i + '"></div>');

        $(".box4").append('<div class="step2" onclick="posNum(this)" id="r' + i + '"></div>');
    }
});

function posNum(e) {
    //Getting the ID of the clicked step.
    var pos = $(e).attr("id");
    $()
    if ($(this).attr(id) == pos) {
        $(this).addClass(".red");
    } else {
        $(this).removeClass(".red");
    }
    // $("#" + pos).css("background-color", "red");


}

function randomNumber() {
    //Generating a random dice roll value.
    var randnum = Math.round(Math.random() * 6) + 1;

    //Changing pictures as per the random number value.
    switch (randnum) {
        case 1:
            $(".diceImg").attr("src", "img/d1.png");
            break;
        case 2:
            $(".diceImg").attr("src", "img/d2.png");
            break;
        case 3:
            $(".diceImg").attr("src", "img/d3.png");
            break;
        case 4:
            $(".diceImg").attr("src", "img/d4.png");
            break;
        case 5:
            $(".diceImg").attr("src", "img/d5.png");
            break;
        case 6:
            $(".diceImg").attr("src", "img/d6.png");
            break;
    }
}
