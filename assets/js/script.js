// add current day to top of page


$(document).ready(function () {

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

 var date = moment().format('dddd MMMM Do');
 $('#currentDay').text(date);

 //change color of div based on time of day
function currentTime() {
    var current = moment().hours()
    var time = $('.time-block');


    time.each(function () {
        var hour = parseInt($(this).attr('id'))
        if (hour === current) {
            $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
        } else if (current > hour) {
            $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
        } else {
            $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
        }
    })
}

currentTime()


});

// save to local storage

$('.saveBtn').on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
});
