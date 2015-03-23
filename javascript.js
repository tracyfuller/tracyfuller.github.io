var userNumber = prompt("Tell me an interesting tidbit about yourself")

function homeWork (userNumber){	
	if (userNumber === "I like dogs." || userNumber === "Dogs rule."){
		console.log("Please refresh the page, you seem to be mistaken about dogs");
	} else if (userNumber.length <= 1){
		console.log("Please refresh the page, surely you are more interesting than only one character can portray");
	} else {
	return console.log("There are " + userNumber.length + " characters in that string. You are awesome!");
	}
}

homeWork (userNumber)
