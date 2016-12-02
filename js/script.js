//when you click the 8 button
	//it adds the text to the 
var keys = document.querySelectorAll('.button');


//loop through al the keys
for (var i = 0; i < keys.length; i++) {
	//when you click on the buttons
	 keys[i].onclick = function() {
	 	//the value of screen becomes the value of innerHTML of this.button
	 	if(this.innerHTML === "AC") {
	 		document.querySelector("#numberBox").value = " ";
	 	}

	 	else if (this.innerHTML !== "=") {
	 		var equation = document.querySelector("#numberBox").value += this.innerHTML;
	 	}


	 	else if(this.innerHTML === "=") {
	 		 document.querySelector("#numberBox").value = eval(document.querySelector("#numberBox").value);
	 	}
	 }
}
	


