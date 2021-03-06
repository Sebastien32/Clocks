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
function displayTime()
{
    // Create a new date object
    date = new Date();
    // Set the hours variable to the current number of hours
    hours = date.getHours();
    // Set the minutes variable to the current number of minutes
    minutes = date.getMinutes();
    // Set the second variable to the current number of seconds
    seconds = date.getSeconds();
    // Set the milliseconds variable to the current number of milliseconds
    milliseconds = date.getMilliseconds();
    // Add a zero to the left of numbers for formatiing
    if(hours <= 9) hours = '0' + hours;
    if(minutes <= 9) minutes = '0' + minutes;
    if(seconds <= 9) seconds = '0' + seconds;
    // Set colortext variable to the display text
    colortext = hours + ":" + minutes + ":" + seconds;
    // Set the red value to the current proportion of a day passed
    red = (milliseconds + (1000 * seconds) + (60000 * minutes) + (3600000 * hours)) * 256 / (86400000);
    red = Math.round(red);
    // Set the green value to the current proportion of an hour passed
    green = (milliseconds + (1000 * seconds) + (60000 * minutes)) / (3600000) * 256;
    green = Math.round(green);
    // Set the blue value to the current proportion of a minute passed
    blue = (milliseconds + (1000 * seconds)) / (60000) * 256;
    blue = Math.round(blue);
    // Convert RBG values to hexadecimal
    hexRed = red.toString(16);
    hexGreen = green.toString(16);
    hexBlue = blue.toString(16);
    //set background color
    if(red <= 15) hexRed = '0' + hexRed;
    if(green <= 15) hexGreen = '0' + hexGreen;
    if(blue <= 15) hexBlue = '0' + hexBlue;
    colorhex = "#" + hexRed + hexGreen + hexBlue;
    //set time
    document.getElementById("hex").innerHTML = colortext;
    document.body.style.background = colorhex;
    //retrigger the function every second
    setTimeout(displayTime, 1000);
}
//call the function
displayTime();
