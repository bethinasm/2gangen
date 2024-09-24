

//MODELL 

let currentNumber = 2;
let currentLoopNumber = 10;


// VIEW -> alt som gir HTML

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div style="width: 300px;">
            <div> 
                Fyll inn et tall du vil gange 2 med. 
                Fyll deretter inn hvor langt du vil at dataen skal gange tallet (loop). 
            </div>
            <br>
            <div style="display: flex; gap: 10px;">
                <label for="gangetall"> Gange-tall </label>
                <input id="gangetall" type="number" onchange="saveNumber(this.value)"/>
                <br>
                <label> Loop-tall </label>
                <input type="number" onchange="saveLoopNumber(this.value)"/>
            </div>
            <div style="text-align: center;"> ${numberMaker()} </div> 
        </div>
    `;

}

function numberMaker(){
    let number = '';
    for(let i=0; i < currentLoopNumber; i++){      // dette er loopen. let i=0 er startverdien/startpunktet for loopen
        let answer = (i + 1)*currentNumber;        // i < currentLoopNumber sjekker at den nye verdien til i er mindre enn currentLoopNumber
        number += `<li> ${answer} </li>`           // hvis i er mindre enn currentLoopNumber (true), legger den til et tall, hvis false går dataen ut av loop.
    }
    return number; //hvis det blir returnert noe, så kan man kalle på en funksjon med ${} i html
}



// CONTROLLER -> alt som må ha en updateView eller endrer på variabler

function saveNumber(inputNumber){
    currentNumber = inputNumber;

    updateView();
}

function saveLoopNumber(inputNumber){
    currentLoopNumber = inputNumber;

    updateView();
}