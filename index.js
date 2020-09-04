let submitButton = document.getElementById("submitButton");
let inputText = document.getElementById("inputText");
let table = document.getElementById("list");
let ul = document.querySelector("ul");





submitButton.addEventListener('click', function(){


if (inputText.value.length > 0 && inputText.value.length < 40){
    let li = document.createElement("li")
    let crossButton = document.createElement("button");
    let crossButton2 = crossButton.appendChild(document.createTextNode("X "));
    crossButton.classList.add("cross");
    li.appendChild(crossButton);
    li.appendChild(document.createTextNode(inputText.value));
    ul.appendChild(li);
    inputText.value = "";
    crossButton.addEventListener('click', function(){
           li.classList.add("delete");
    

   
    }); li.addEventListener('click', function(){
        
            li.classList.toggle("done")
    
    });
;

}

});