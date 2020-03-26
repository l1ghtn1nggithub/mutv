function getTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var y = d.getFullYear();
  var mo = d.getMonth();
  var dt = d.getDate();
  var dy = d.getDay();
  if (h > 11) {
	var ampm = "PM";
  } else {
	var ampm = "AM";
  }
  if (h == 0) {
	h = 12;
  } else if (h > 12) {
	h = h - 12;
  }
  if (dy == 0) {
	var dytext = "Sunday";
  } else if (dy == 1) {
	var dytext = "Monday";
  } else if (dy == 2) {
	var dytext = "Tuesday";
  } else if (dy == 3) {
	var dytext = "Wednesday";
  } else if (dy == 4) {
	var dytext = "Thursday";
  } else if (dy == 5) {
	var dytext = "Friday";
  } else {
	var dytext = "Saturday";
  }
  var htext = h.toString();
  var mtext = m.toString();
  var ytext = y.toString();
  var motext = mo.toString();
  var dttext = dt.toString();
  document.getElementById("time").innerHTML = "The time is ".concat(htext,":",mtext," ",ampm," and the date is ",dytext,", ",motext,"/",dttext,"/",ytext,". Thank you for choosing MUTV!");
}