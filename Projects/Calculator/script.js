let input = document.getElementById("inputBox");

//Button click
function press(value){
    input.value += value;
}

// Equal
function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch{
        input.value = "Error";
    }
}

// AC
function clearDisplay(){
    input.value = "";
}

// DEL
function deleteLast(){
    input.value = input.value.slice(0,-1);
}

// Keyboard Support
document.addEventListener("keyup", function(e){

    if(/^[0-9]$/.test(e.key) || "+-*/.%".includes(e.key)){
       press(e.key);
    }

    else if(e.key === "Enter"){
       calculate();
    }

   else if(e.key === "Backspace"){
       deleteLast();
   }

    else if(e.key === "Escape"){
       clearDisplay();
    }
});