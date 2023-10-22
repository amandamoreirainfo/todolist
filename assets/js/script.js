

const localStorageKey = list;


function addText(){

    let input = document.getElementById("textInput");

    if(!input.value){

            alert("Digite algo para inserir em sua list");

        }else{

            let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
            values.push({
                name: input.value
            })

            localStorage.setItem(localStorageKey, JSON.stringify(values))
            
            showValues();

    }

}

function showValues(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let doList = document.getElementById('list');
    doList.innerHTML = '';

    for(let i = 0; i<values.length; i++){

        doList.innerHTML += `<li>${values[i]['name']}</li><button id="feito">TESTE</button><button id="remove">REMOVE</button>`;
    
    }

}


