// Global Variables declaration

var counterWins = 0;
var counterLosses = 0;
var n1Score = 0;

// a randon funtion is assigned to the number that need to be matched (this number varies between 18-120)

var mNumber = Math.floor(Math.random() * (102)) + 12;
var sum = 0;


// a randon funtion is assigned to each of the crystal button, after
// a number between 1 and 12 is assigned to each of them, they will remain fixed until the number to be matched 
// is matched or exceeded

$("#button-1").val(function () {
    return Math.floor(Math.random() * (11)) + 1;
});

$("#button-2").val(function () {
    return Math.floor(Math.random() * (11)) + 1;
});

$("#button-3").val(function () {
    return Math.floor(Math.random() * (11)) + 1;
});

$("#button-4").val(function () {
    return Math.floor(Math.random() * (11)) + 1;
});

$("#mNumber").text(mNumber);
$("#nWins").text(counterWins);
$("#nLosses").text(counterLosses);
$("#nScore").text(n1Score);

// the main engine function, the "if" check if the variable sum (the number results of the sum by clicking the crytal buttons)
// is equal to the random number that need to be matched, if the variable "mNumber" is matched (sum=nNumber), then a wins is counted
// the "else if" basically check if the number to be matched is exceed, then a losses is counted
// the "else" basically keeps adding number to the variable "sum" when clicking the crystal buttons,etc.

$(".number").on("click", function () {
    if (sum == mNumber) {
        $("#nOutcome").text("YOU WIN!!");
        counterWins++
        n1Score = counterWins - counterLosses;
        $("#nWins").text(counterWins);
        $("#nScore").text(n1Score);
        function Rstart() { };
    }
    else if (sum > mNumber) {
        $("#nOutcome").text("YOU LOSE!!");
        counterLosses++
        n1Score = counterWins - counterLosses;
        $("#nLosses").text(counterLosses);
        $("#nScore").text(n1Score);
        function Rstart() { };
    }
    else {
        sum += Number($(this).val());
        $("#sSum").text(sum);
    }
});

// this function basically allow the player to play again  while keeping the number of wins, losses, 
// and the total score (wins - losses) obtained in previous plays as far as the whole game is not
// reset when hitting the refresh button

$("#rStart").on("click", function Rstart() {

    mNumber = Math.floor(Math.random() * (102)) + 12;
    sum = 0;

    $("#button-1").val(function () {
        return Math.floor(Math.random() * (11)) + 1;
    });

    $("#button-2").val(function () {
        return Math.floor(Math.random() * (11)) + 1;
    });

    $("#button-3").val(function () {
        return Math.floor(Math.random() * (11)) + 1;
    });

    $("#button-4").val(function () {
        return Math.floor(Math.random() * (11)) + 1;
    });

    $("#mNumber").text(mNumber);
    $("#sSum").text(sum);
    $("#nOutcome").text("");
});