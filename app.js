var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// first text area
var txtFirst = document.querySelector("textarea");

//btn with class "btn-primary"
var btnPrimary = document.querySelector(".btn-primary");

//element with id "input-btn"
var inputButton = document.querySelector("#input-btn");

//element with id "input-btn"
var inputTranslateButton = document.querySelector("input[name = 'translator']");

function clickHandler()
{
    console.log("clicked");
    console.log("main text-area"+txtInput);
};

btnTranslate.addEventListener("click", clickHandler) ;

btnPrimary.addEventListener("click", function primaryClickHandler()
{
    console.log("first text area values: "+txtFirst);
    console.log("Inputted text : "+inputButton);
    console.log("Inputted translator : "+inputTranslateButton);

});