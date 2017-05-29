//lets display the current time
/*var date;
var hours;
var minutes;
var seconds;
var milliseconds;
var colorhex;
var colortext;
var red;
var hexRed;
var green;
var hexGreen;
var blue;
var hexBlue;
function displayTime()
{
    // Create a new date object
    date = new Date();
    // Set the hours variable to the current number of hours
    hours = d.getHours();
    // Set the minutes variable to the current number of minutes
    minutes = d.getMinutes();
    // Set the seconds variable to the current number of seconds
    seconds = d.getSeconds();
    // Set the milliseconds variable to the current number of milliseconds
    milliseconds = d.getMilliseconds;
    // Add a zero to the left of the numbers if they are single digits
    if(hours <= 9) hours = '0' + hours;
    if(minutes <= 9) minutes = '0' + minutes;
    if(seconds <= 9) seconds = '0' + seconds;
    // Set colortext variable to the display text
    colortext = hours + ":" + minutes + ":" + seconds;
    //set time
    document.getElementById("hex").innerHTML = colortext;
    // Set the red value to the current proportion of a day passed
    red = milliseconds + (1000 * seconds) + (60000 * minutes) + (3600000 * hours) / (86400000) * 256;
    red = round(red);
    // Set the green value to the current proportion of an hour passed
    green = milliseconds + (1000 * seconds) + (60000 * minutes) / (3600000) * 256;
    green = round(green);
    // Set the blue value to the current proportion of a minute passed
    blue = milliseconds + (1000 * seconds) / (60000) * 256;
    blue = round(blue);
    // Convert RBG values to hexadecimal
    hexRed = red.toString(16);
    hexGreen = green.toString(16);
    hexBlue = blue.toString(16);
    //set background color
    if(red <= 15) hexRed = '0' + hexRed;
    if(green <= 15) hexGreen = '0' + hexGreen;
    if(blue <= 15) hexBlue = '0' + hexBlue;
    colorhex = "#" + hexRed + hexGreen + hexBlue;
    document.body.style.background = colorhex;
    //retrigger the function every millisecond
    setTimeout(displayTime, 1);
    hexRed = yourNumber.toString(16);
}
//call the function
displayTime();
*/

//lets display the current time
//lets display the current time
var date;
var hours;
var minutes;
var seconds;
var milliseconds;
var colorhex;
var colortext;
var red;
var hexRed;
var green;
var hexGreen;
var blue;
var hexBlue;
function displayTime() {
    date = new Date(); //new data object
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    milliseconds = d.getMilliseconds;
    //add zero to the left of the numbers if they are single digits
    if(hours <= 9) hours = '0' + hours;
    if(minutes <= 9) minutes = '0' + minutes;
    if(seconds <= 9) seconds = '0' + seconds;

    colorhex = "#" + hours + minutes + seconds;
    colortext = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    //set background color
    document.body.style.background = colorhex;
    //set time
    document.getElementById("hex").innerHTML = colortext;

    //retrigger the function every second
    setTimeout(displayTime, 10);
}
//call the function
displayTime();
