/* Input:
 * Processing: colculation of windchil according the the formula f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
 * Output: future value
 */

// hightemperature value and displaying it
var ht = 90;
document.getElementById("hightemperature").innerHTML = ht;

// lowtemperature value and displaying it
var lt = 66;
document.getElementById("lowtemperature").innerHTML = lt;

// the value of wind speed in miles per hour and displaying it
var s = 5;
document.getElementById("wind").innerHTML = s;

/* colculating the average temperature between the high and the low predictions */
var t = (ht + lt) / 2;

/* compute and display the wind chill temperature */
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t *  Math.pow(s, 0.16);
f = Math.round(f);
document.getElementById("windchill").innerHTML = f;
document.getElementById("windchillfooter").innerHTML = f;
