<!--   A Wheetly Affair
       Author: Ann Wheet
       Date: 11.11.2018
-->

$(document).ready(function () { // using jQuery to ready function. when loaded.
handleDateChanged();
});

//listener on date field
function handleDateChanged() {
    $('#date').on('change', function () {

       //validating date format
      if (isValid($('#date').val())) {
        var age = calculateDiff($('#date').val()); //calling cal

         $("#result").text(age.years+" Years "+age.months+" Months "+age.days+" Days");   //infusing output into html in text format
      } else {
        $("#result").text('');
      }    
    });
}

//function to calculate different between two dates, which takes String argument 7 returns object of

function calculateDiff(date) {

    date = date.split('/'); // splitting with reference to / , and storing as an array

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // in javascript months are calculated from 0 so add +1
    var day = today.getDate();
    var yy = parseInt(date[2]);
    var mm = parseInt(date[1]);
    var dd = parseInt(date[0]);
    var years, months, days;

   // calculating months
    months = month - mm;
    if (day < dd) {
        months = months - 1;
    }

    // calculating years
    years = year - yy;
    if (month * 100 + day < mm * 100 + dd) {
        years = years - 1;
        months = months + 12;
    }

    // calculating days
    days = Math.floor((today.getTime() - (new Date(yy + years, mm + months - 1, dd)).getTime()) / (24 * 60 * 60 * 1000));

    return {years: years, months: months, days: days};
}

//To Validate Date

function isValid(date){
   //A regex,(A regular expression is an object that describes a pattern of characters), for dd/mm/yyyy format ,

   var date_regex = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
   if(!(date_regex.test(date)))
   {
       return false;
   }
   return true;
}