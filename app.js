var text = document.querySelector("#txt-inp");
var translate = document.querySelector("#btn");
var output = document.querySelector("#output");
var clear = document.querySelector("#btn2");

const url = "https://api.funtranslations.com/translate/pirate.json";


const getURL = (textInp) => {
    return url + "?text=" + textInp;
}

const errorHandler = (error) => {
    output.innerText = "Error: " + error;
}
const textInpHandler = () => {
    var userInp = text.value;

    fetch(getURL(userInp)).then(response => response.json()).then(json => {
        var final = json.contents.translated; 
        return output.innerText = final
    }).catch(errorHandler);

}

const clearOutput = () => {
    output.innerText = "";
}

translate.addEventListener('click', textInpHandler);
clear.addEventListener('click', clearOutput);