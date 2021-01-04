var randnum = undefined
var moveArray = ["r", "b", "y", "g"]
var enteringInderx = 15

$(document).ready(function () {
    //Creating step boxes with unquie IDs
    for (var i = 0; i < 18; i++) {
        $(".box1").append('<div class="step box" id="b' + i + '"></div>');

        $(".box2").prepend('<div class="step2 box"  id="y' + i + '"></div>');

        $(".box3").prepend('<div class="step box"   id="g' + i + '"></div>');

        $(".box4").append('<div class="step2 box"  id="r' + i + '"></div>');

    }
    $(".box").click(function () {
        pegMove($(this).attr("class").split(" ")[2], $(this).attr("id"));

    })

    /*Move token red*/
    $(".player").click(function () {
        /*check if this avtive player */
        if ($(this).parent().parent().hasClass("thisUserTurn")) {
            var kushv = $(this).attr("class").split(" ")[0];
            var firstLetter = $(this).attr("class").split("")[0]
            $(this).removeClass(kushv);
            $("#" + firstLetter + "5").addClass(kushv);
        } else {
            alert("Please roll dice first.");
        }
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
    if ($(".diceImg").attr("src") == "img/d6.png") {
        $(".innerbox").each(function () {
            if ($(this).hasClass("thisUserTurn")) {
                var currId = $(this).attr("class").split("")[0] + "5";

                if ($("#" + currId).attr("class").split(" ").length > 1) {
                    randnum = Math.round(Math.random() * 5) + 1;

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
                } else {
                    alert("Please move a peg ")
                }

            }

        })
    } else {

        //Generating a random dice roll value.
        randnum = Math.round(Math.random() * 5) + 1;

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

                }
                var check = function () {
                    if ($("r5").hasClass("redtokken")) {
                        alert("Please select you token")
                    } else {
                        setTimeout(check, 1000);
                    }
                }

            })

        } else {
            $(".innerbox").each(function (index) {
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
}
/*Peg Increment*/

function pegMove(token, position) {
    console.log("rndom", randnum);
    console.log("token", token);
    console.log("Token position", position);
    var newPostion = parseInt(randnum * 3) + parseInt(position.match(/\d/g).join(""))
    console.log(newPostion)
    $("#" + position).removeClass(token);
    $(".innerbox").each(function (index) {
        if ($(this).hasClass("thisUserTurn")) {
            console.log($(this).attr("class"));
            console.log($(this).attr("class").split("")[0])
            var firstLetter = $(this).attr("class").split("")[0]
            var newPostionId = firstLetter + newPostion;
            console.log(newPostionId)
            if (newPostion > 17) {
                var currPegIndex = moveArray.indexOf(firstLetter) // 0,1,2,3
                if (currPegIndex >= 3) {
                    var nextPegBox = moveArray[0] // r
                } else {
                    var nextPegBox = moveArray[currPegIndex + 1] // r
                }

                var extraPositionValue = newPostion - 17;
                console.log(extraPositionValue)
                var nextBoxMovingIndex = nextPegBox + (18 - extraPositionValue);

                console.log(nextBoxMovingIndex);
                $("#" + nextBoxMovingIndex).addClass(token);

            } else {
                $("#" + newPostionId).addClass(token);
            }
        }

    });

    /* $("#" + newPostion).addClass*/

}
