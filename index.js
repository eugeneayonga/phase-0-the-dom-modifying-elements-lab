// Write your code here!
/* const element = document.getElementById("main");  
element.remove();

const newHeader = document.createElement("h1");
 newHeader.setAttribute("id","victory");

newHeader.textContent = "YOUR - NAME is the champion";*/


/* document.getElementById('main').remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "YOUR-NAME is the champion";*/

const element = document.getElementById("main");  
element.remove();

let newHeader = document.createElement("h1");
 newHeader.setAttribute("id","victory");

newHeader.innerHTML = "YOUR - NAME is the champion";
