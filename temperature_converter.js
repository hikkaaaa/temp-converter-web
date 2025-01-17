const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
const mySubmit = document.getElementById("submit");

mySubmit.onclick = function(){
    let answer;
    let result = document.getElementById("result");
    let myInput = document.getElementById("temp-conv").value;
    if(!(CtoF.checked || FtoC.checked)){
        answer = "Select a unit";
    }else{
        myInput = Number(myInput);
        if(CtoF.checked){
            answer = (myInput * (9/5)) + 32;
            result.textContent = myInput + "(°C) ➡ " + answer.toFixed(1) + "(°F)"; 
        }else if(FtoC.checked){
            answer = (myInput - 32) * (5/9);
            result.textContent = myInput + "(°F) ➡ " + answer.toFixed(1) + "(°C)"; 
        }
    }

    if(isNaN(answer)){
        result.textContent = answer;
    }
}