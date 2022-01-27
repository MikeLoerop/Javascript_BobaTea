


function bubbleTeaInit(){
    let bubbleTeaValues = [];
    let results = [];

    bubbleTeaValues = getValues();
    let validation = validateValues(bubbleTeaValues);

    alert(bubbleTeaValues[0] + 'And' + bubbleTeaValues[1]);

    if(validation === true){
        results = generateResults(bubbleTeaValues);

        displayResults(results);

    }else{
        alert("You must enter integers");
    }

}

function getValues () {
    let bubbleValue = document.getElementById("bubbleValue").value;
    let teaValue = document.getElementById("teaValue").value;
    

    //Parse inputs into integers
    bubbleValue = parseInt(bubbleValue);
    teaValue = parseInt(teaValue);

    let bubbleTeaValues = [];
    bubbleTeaValues[0] = bubbleValue;
    bubbleTeaValues[1] = teaValue;

    return bubbleTeaValues;
    
}

function validateValues(bubbleTeaValues){

    //Did the user enter integers?
    if(Number.isInteger(bubbleTeaValues[0]) && Number.isInteger(bubbleTeaValues[1])){    
        return true;

    }else{
        return false;
    }
        
}



//Generate numbers from startValue to endValue
function generateResults(bubbleTeaValues){
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

//Display the numbers and mark the even numbers bold
function displayResults(numbers) {
    let templateRow = "";
    
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        let className = "even";
        if(number % 2 == 0){
            className
        }else{

            className = "odd";
            
        }

        templateRow += `<tr><td class="${className}">${number}</td><tr>`;
                
    }

    document.getElementById("results").innerHTML = templateRow;
}