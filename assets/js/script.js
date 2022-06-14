// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        
        var timeNow = moment().hour();

        
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

           
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    
    $("#First .description").val(localStorage.getItem("First Hour"));
    $("#Second .description").val(localStorage.getItem("Second"));
    $("#Third .description").val(localStorage.getItem("Third"));
    $("#Fourth .description").val(localStorage.getItem("Fourth"));
    $("#Fifth .description").val(localStorage.getItem("Fifth"));
    $("#Sixth .description").val(localStorage.getItem("Sixth"));
    $("#Seventh .description").val(localStorage.getItem("Seventh"));
    $("#Eigth .description").val(localStorage.getItem("Eigth"));
    $("#Ninth .description").val(localStorage.getItem("Ninth"));
    $("#Tenth .description").val(localStorage.getItem("Tenth"));

    timeTracker();
})
