//This script takes the time and converts it into a nice looking format.

window.onload = function() {
	startTime()
}

function startTime() {
		var today = new Date();
    var h = today.getHours();
		if (h >= 13){
			var h = h - 12;
		}
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("Header").innerHTML =
    "It is " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
		var d = today.getDay();

			switch (d) {
	    case 0: day = "Sunday"; break;
	    case 1: day = "Monday"; break;
	    case 2: day = "Tuesday"; break;
	    case 3: day = "Wednesday"; break;
	    case 4: day = "Thursday"; break;
	    case 5: day = "Friday"; break;
	    case 6: day = "Saturday";
				}

			var num = today.getDate();
			var ordinal = "err";

			switch (num) {
			case 1: ordinal = "st"; break;
			case 2: ordinal = "nd"; break;
			case 3: ordinal = "rd"; break;
			default: ordinal = "th";
				}


		  document.getElementById("Date").innerHTML = "Today is " + day + " the " + num + ordinal;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
