// Your task in order to complete this Kata is to write a
// function which formats a duration, given as a number of seconds, in a human - friendly way.

// The
// function must accept a non - negative integer.If it is zero, it just returns "now".Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

//     formatDuration(62) // returns "1 minute and 2 seconds"
// formatDuration(3662) // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc.In general, a positive integer and one of the valid units of time, separated by a space.The unit of time is used in plural
// if the integer is greater than 1.

// The components are separated by a comma and a space(", ").Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one.Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times.So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all
// if its value happens to be zero.Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible".It means that the
// function should not
// return 61 seconds, but 1 minute and 1 second instead.Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
function formatDuration(seconds) {

    if (seconds === 0) {
        return "now";
    }

    // calculate years
    let years = Math.floor(seconds / 31536000);
    seconds = seconds - years * 31536000;
    // calculate days
    let days = Math.floor(seconds / 86400);
    seconds = seconds - days * 86400;
    // calculate hours
    let hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;
    // calculate minutes
    let mins = Math.floor((seconds / 60));
    seconds = seconds - mins * 60;
    // calculate seconds
    let secs = seconds % 60;

    function buildString(value, unit) {
        if (value > 0) {
            // return value + unit + s if more than 1 plus a comma
            return value + ' ' + unit + (value > 1 ? 's' : '') + ', ';
        }
        return '';
    }

    // build the string 
    let date = buildString(years, 'year');
    date += buildString(days, 'day');
    date += buildString(hours, 'hour');
    date += buildString(mins, 'minute');
    date += buildString(secs, 'second');

    // remove trailing comma  
    let i = date.lastIndexOf(", ");
    date = date.substring(0, i);

    // replace last comma with and
    let j = date.lastIndexOf(", ");
    // if there is a last comma then we replace it
    if (j > 0) {
        date = date.substring(0, j) + ' and ' + date.substring(j + 2);
    }
    return date;


}
