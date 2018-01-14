//Even though this is an HTML class I wanted to throw some of my JS skills in here.
//This is a script that parses and XML file from weather underground. I use my API key for the file.


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "http://api.wunderground.com/api/e3257e9cd4037f59/conditions/q/WI/Hortonville.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;

    document.getElementById("weatherdat1").innerHTML =
    "Current Temperature " + xmlDoc.getElementsByTagName("temp_f")[0].childNodes[0].nodeValue + "&#176F" + "&nbsp &nbsp &nbsp &nbsp &nbsp" +
    "Humidity " + xmlDoc.getElementsByTagName("relative_humidity")[0].childNodes[0].nodeValue + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Pressure " +
    xmlDoc.getElementsByTagName("pressure_in")[0].childNodes[0].nodeValue + "<div style='display:inline; font-size:15px'>inHg</div>"
    + "&nbsp &nbsp &nbsp &nbsp &nbsp" + " Pressure Trend " + xmlDoc.getElementsByTagName("pressure_trend")[0].childNodes[0].nodeValue;
}
