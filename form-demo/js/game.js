let fname = "";

//function for the greet
function greet() {
    //grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let lname = document.getElementById("lname").value;


    //show the result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

//function to trivia game
function trivia() {
    //trivia answer
    let triviaAnswer = document.getElementById("triviaAnswer");
    //get the checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //decide what to print
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

//fuction to two truths and a lie game
function game() {
    //game answer
    let lieAnswer = document.getElementById("lieAnswer");
    //get the checked values from form
    let truthSelected = document.getElementById("truth").checked;
    let lieSelected = document.getElementById("lie").checked;
    let truth2Selected = document.getElementById("truth2").checked;

    //decide what to print
    if (truthSelected) {
        lieAnswer.innerHTML = fname + ", you are wrong. I do have two sibilings.";
    } else if (lieSelected) {
        lieAnswer.innerHTML = "Congradulations " + fname + "! You have caught the lie.";
    } else if (truth2Selected) {
        lieAnswer.innerHTML = fname + ", you are wrong. I do have a dog and a cat.";
    }
}