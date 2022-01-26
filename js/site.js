//Get string
function getValue(){
    
    let userString = document.getElementById("userString").value;

    return userString;

}

//Reverse string
function reverseString(userString){

    let finalString = [];

    for (let index = userString.length - 1; index >= 0; index--) {
        finalString += userString[index];
        
    }

    return finalString;
}

//Display string
function displayString(outputString){

    //Display result
    document.getElementById("msg").innerHTML = `Your string reversed is: ${outputString}`

    //Display alert
    document.getElementById("alert").classList.remove("invisible");

}

function reverseCall(){
    //Set Alert to invisible as a precaution
    document.getElementById("alert").classList.add("invisible");

    //Get the string to reverse
    let userString = getValue();

    //Reverse the string
    let outputString = [];
    outputString = reverseString(userString);

    //Display the reversed string to user
    displayString(outputString);
}