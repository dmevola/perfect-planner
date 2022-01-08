// add current day to top of page


$(document).ready(function () {

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
