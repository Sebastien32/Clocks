//lets display the current time
var d;
var h;
var m;
var s;
var colorhex;
var colortext;
function displayTime() {
    d = new Date(); //new data object
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    //add zero to the left of the numbers if they are single digits
    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;

    colorhex = "#" + h + m + s;
    colortext = h + ":" + m + ":" + s;
    //set background color
    document.body.style.background = colorhex;
    //set time
    document.getElementById("hex").innerHTML = colortext;

    //retrigger the function every second
    setTimeout(displayTime, 1000);
}
//call the function
displayTime();
