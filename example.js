var height = "about five '10\"tall";
/*
alert(height);
alert(10 + 20);
alert("10" + 20);
 
if (1>2) {
	alert("The world is going to bumb");
} else {
	alert("Everything is possible in this world");
}
var a = "", b = false;
if (a == b) {
	alert("Yes");
} else {
	alert("NO");
}

if (a===b) {
	alert("That's all equal");
} else {
	alert("It's not true");
}
*/
// var count = 1;
// while (count<10) {
// 	alert(count++);
// }
// for (var i = 0; i < 10; i++) {
// 	alert(i);
// }

// function shout () {
// 	var beatles = ["John", "Tom", "Anson", "York"];
// 	for (var i = 0; i < beatles.length; i++) {
// 		alert(beatles[i]);
// 	}
// }

// shout();

function convertToCelsius (temp) {
	var result = temp - 32;
	result = result/1.8;
	return result;
}

var temp_fashrenheit = 95;
alert(convertToCelsius(temp_fashrenheit));


function square (num) {
	var total = num*num;
	return total;
}

var total = 50;

square(20);

alert(total);