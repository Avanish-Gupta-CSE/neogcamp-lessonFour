var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error)
{
    console.log("Error occured",error);
    alert("Something Wrong with server! Try again after some time.");
}

function clickHandler()
{
    // outputDiv.innerText = "Translated text : " + txtInput.value;
    var inputText = txtInput.value; 

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler) ;

