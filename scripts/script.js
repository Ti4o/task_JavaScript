$("#toggleFirstDiv").click(function () {
    $(".textArea").slideToggle("slow");
});

function openClose() {
    if (document.getElementById("toggleFirstDiv").innerText == "Close") {
        document.getElementById("toggleFirstDiv").innerText = "Open";
    }
    else {
        document.getElementById("toggleFirstDiv").innerText = "Close";
    }
}

$("#toggleSecondDiv").click(function () {
    $(".textAreaTwo").slideToggle("slow");
});

function openClosetwo() {
    if (document.getElementById("toggleSecondDiv").innerText == "Close") {
        document.getElementById("toggleSecondDiv").innerText = "Open";
    }
    else {
        document.getElementById("toggleSecondDiv").innerText = "Close";
    }
}

$(".firstTitle").click(function () {
    $(".textArea").slideToggle("slow");
});

$(".secondTitle").click(function () {
    $(".textAreaTwo").slideToggle("slow");
});


var intImage = 2;
function changeImg () {
    switch (intImage) {
        case 1:
            pic.src = "images/arrow_up.png"
            intImage = 2
            return (false);            
        case 2:
            pic.src = "images/arrow_down.png"
            intImage = 1
            return (false);
    }
}

$(".arrow").click(function () {
    $(".textArea").slideToggle("slow");
});

var intImageTwo = 2;
function changeImgTwo() {
    switch (intImageTwo) {
        case 1:
            picTwo.src = "images/arrow_up.png"
            intImageTwo = 2
            return (false);
        case 2:
            picTwo.src = "images/arrow_down.png"
            intImageTwo = 1
            return (false);
    }
}

$(".arrowTwo").click(function () {
    $(".textAreaTwo").slideToggle("slow");
});
