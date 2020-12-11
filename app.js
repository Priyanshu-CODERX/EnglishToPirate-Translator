var text = document.querySelector("#txt-inp");
var translate = document.querySelector("#btn");
var output = document.querySelector("#output");
var clear = document.querySelector("#btn2");

const url = "https://api.funtranslations.com/translate/pirate.json";

function getURL(textInp){
    return url + "?text=" + textInp;
}

function errorHandler(error) {
    console.log(error);
    alert("Got an error, please try again later");
}
function textInpHandler() {
    var userInp = text.value;

    fetch(getURL(userInp)).then(response => response.json()).then(json => {
        var final = json.contents.translated; 
        return output.innerText = final
    }).catch(errorHandler);

}

function clearOutput(){
    output.innerText = "";
}

translate.addEventListener('click', textInpHandler);
clear.addEventListener('click', clearOutput);