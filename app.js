var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

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
    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler) ;

