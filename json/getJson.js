const header = document.querySelector('header');
const section = document.querySelector('section');
var requestURL = 'https://jason870509.github.io/Project/json/dance.json';
var request = new XMLHttpRequest();
var jsonData;
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    jsonData = request.response;
    console.log(jsonData[0]['left_elbow_x']);
    // populateHeader(superHeroes);
    // showHeroes(superHeroes);
}
