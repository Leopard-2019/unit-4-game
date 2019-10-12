// Global Variables declaration

var counterWins = 0;
var counterLosses = 0;
var n1Score = 0;

// a randon funtion is assigned to the number that need to be matched
var mNumber = Math.floor(Math.random() * (102)) + 12;
var sum = 0;


// a randon funtion is assigned to each of the crystal button, after
// a number is assigned to each of them, they will remain fixed until the number to be matched 
// is equalled or exceeded

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
$("#rStart").on("click", function RStart() {

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