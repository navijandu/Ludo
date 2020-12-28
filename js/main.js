$(document).ready(function () {
    //Creating step boxes with unquie IDs
    for (var i = 0; i < 18; i++) {
        $(".box1").append('<div class="step" id="b' + i + '"></div>');

        $(".box2").prepend('<div class="step2"  id="y' + i + '"></div>');

        $(".box3").prepend('<div class="step"   id="g' + i + '"></div>');

        $(".box4").append('<div class="step2"  id="r' + i + '"></div>');

    }
    $(".redtoken").click(function () {
        $(this).removeClass("redtoken")

        $("#r5").addClass("redtoken")
    });
    $(".bluetoken").click(function () {
        $(this).removeClass("redtoken")

        $("#b5").addClass("redtoken")
    });
});

/*function posNum(e) {
    //Getting the ID of the clicked step.
    var pos = $(e).attr("id");
    $()
    if ($(this).attr(id) == pos) {
        $(this).addClass(".red");
    } else {
        $(this).removeClass(".red");
    }
    // $("#" + pos).css("background-color", "red");


}*/

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

    /*IF randnum is = 6 then */
    if (randnum == 6) {
        $(".innerbox").each(function () {
            if ($(this).hasClass("thisUserTurn")) {

                console.log($(this).attr("class"))
                alert("Please (" +
                    $(this).attr("class").split(" ")[0] + ")  move you token ")
            }

        })

    } else {
        $(".innerbox").each(function (index) {
            console.log($(this).hasClass("thisUserTurn"))
            if ($(this).hasClass("thisUserTurn")) {

                $(this).removeClass("thisUserTurn")

                var index = $(this).index(); //3
                var nextIndex = index + 1; //4

                /*console.log(index)
console.log(nextIndex)*/

                if (nextIndex < 4) {
                    $(".innerbox").each(function (index) {
                        if ($(this).index() == nextIndex) {
                            $(this).addClass("thisUserTurn")
                            return false;
                        }
                    })
                } else {
                    $(".innerbox").each(function (index) {
                        if ($(this).index() == 0) {
                            $(this).addClass("thisUserTurn")
                            return false;
                        }
                    })
                }

                return false;
            }
        })


    }
}
