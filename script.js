var toggleButtons=[];

$(document).ready(function () {

    var i = 0;
    $(".toggledElement").each(function (index, element) {
        toggleButtons[i] = [];
        toggleButtons[i][0] = $(element).prev().prev();
        toggleButtons[i][1] = toggleButtons[i][0].prev();
        toggleButtons[i][2] = $(element).parent().prev().prev();

        $(element).addClass("toggledElement" + i);
        
        for (var j = 0; j < 3; j++) {
            console.log(j);
            var elementClass = ".toggledElement" + i;
            var id = i;
            var open = true;
            toggleButtons[i][j].click(function () {
                console.log("click function working");
                console.log(elementClass);
                $(elementClass).slideToggle("slow");
                if (open) {
                    toggleButtons[id][0].attr("src", "arrow_up.png");
                    toggleButtons[id][2].text("Open");
                    open = false;
                }

                else {
                    toggleButtons[id][0].attr("src", "arrow_down.png");
                    toggleButtons[id][2].text("Close");
                    open = true;
                }
            })
        }
        i++;
    })
});

