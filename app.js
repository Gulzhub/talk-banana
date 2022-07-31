var input = document.querySelector ("#input");
var translateButton = document.querySelector ("#button");
var output = document.querySelector ("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function apiURL (text) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler () {
    var inputText = input.value
    fetch(apiURL(inputText))
    .then (response => response.json ())
    .then (json => output.innerText = json.contents.translated)
}

function typeIdentifier () {
    output.innerText = (" ")
}

translateButton.addEventListener ("click", clickHandler)
input.addEventListener ("change", typeIdentifier)