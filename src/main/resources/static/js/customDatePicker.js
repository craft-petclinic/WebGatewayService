//var checkPastTime = function(inputDateTime) {
//    if (typeof(inputDateTime) != "undefined" && inputDateTime !== null) {
//        var current = new Date();
// 
//        //check past year and month
//        if (inputDateTime.getFullYear() < current.getFullYear()) {
//            $('#datetimepicker').datetimepicker('reset');
//            alert("Sorry! Past date time not allow.");
//        } else if ((inputDateTime.getFullYear() == current.getFullYear()) && (inputDateTime.getMonth() < current.getMonth())) {
//            $('#datetimepicker').datetimepicker('reset');
//            alert("Sorry! Past date time not allow.");
//        }
// 
//        // 'this' is jquery object datetimepicker
//        // check input date equal to todate date
//        if (inputDateTime.getDate() == current.getDate()) {
//            if (inputDateTime.getHours() < current.getHours()) {
//                $('#datetimepicker').datetimepicker('reset');
//            }
//            this.setOptions({
//                minTime: current.getHours() + ':00' //here pass current time hour
//            });
//        } else {
//            this.setOptions({
//                minTime: false
//            });
//        }
//    }
//};
 
var currentYear = new Date();
$('#datetimepicker').datetimepicker({
    format:'Y-m-d H:i',
    minDate : 0,
    minuteStepping:30,
    yearStart : currentYear.getFullYear(),
    use24hours: true,
    minTime:'08:00',
    maxTime:'18:00' 	
    // Start value for current Year selector
  //  onChangeDateTime:checkPastTime,
    //onShow:checkPastTime
});