// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function() {
        var scheduleText = $(this).siblings(".description").val();
        var timeId = $(this).parent().attr("id");
        localStorage.setItem(timeId, scheduleText);
        console.log(scheduleText);
        });
   
    function timeTracker() {
        
        var timeNow = moment().hour();

        //putting function for saving and removing items. 
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

    
    $("#First1 .description").val(localStorage.getItem("First1"));
    $("#Second2 .description").val(localStorage.getItem("Second2"));
    $("#Third .description").val(localStorage.getItem("Third"));
    $("#Fourth .description").val(localStorage.getItem("Fourth"));
    $("#Fifth .description").val(localStorage.getItem("Fifth"));
    $("#Sixth .description").val(localStorage.getItem("Sixth"));
    $("#Seventh .description").val(localStorage.getItem("Seventh"));
    $("#Eighth .description").val(localStorage.getItem("Eighth"));
    $("#Ninth .description").val(localStorage.getItem("Ninth"));
    $("#Tenth .description").val(localStorage.getItem("Tenth"));

    timeTracker();
})
