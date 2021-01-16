let firstArray = [];
let anotherArray = [];

function startProgram()
{

    for(let i = 0; i < 3; i++)
    {
        let person = prompt("Please enter a fruit!");
        firstArray[i] = person;
    }

    makeList();
}

function makeList() {
    let ul = document.createElement('ul');
    document.getElementById('firstScreen').appendChild(ul);
    for (let i = 0; i < firstArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = firstArray[i];
    };
    
    document.getElementById("GetFruitButton").hidden = true;
    document.getElementById("scrambleButton").style.display = "block";
    scrambleBtn = document.querySelector("#scrambleBtn");
    scrambleBtn.addEventListener("click",HideFirstScreen,false);
}

function makeListForScrambledWords() {
    let ul = document.createElement('ul');
    document.getElementById('secondScreen').appendChild(ul);

    var secondArray = firstArray.map(function(oneWord) 
{        
    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); 
});


    for (let i = 0; i < secondArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = secondArray[i];
    };
}

function HideFirstScreen()
{
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "block";

    makeListForScrambledWords();
}