const myDiv = document.getElementById("myDiv");
console.log(myDiv);
myDiv.style.color="red";
myDiv.innerText="Goodbye!";
// myDiv.innerHTML="<ul><li>Hello</li><li>Goodbye</li><ul>";

const hello = "Hello";
const goodbye = "Goodbye";
myDiv.innerHTML = `<ul>
<li>${hello}</li>
<li>${goodbye}</li>
</ul>
`;
// Accesarea elementelor dupa numele clasei css
const allErrors = document.getElementsByClassName("error");
console.log(allErrors);

// Accesarea elementelor dupa valoarea atributului name:
const allAnimalInputs = document.getElementsByName("animal");
console.log(allAnimalInputs);

// Accesarea elementelor dupa numele tag-ului
const allSections = document.getElementsByTagName("section")
console.log(allSections);

// Accesarea elementelor dupa querry-uri css:
const firstSection = document.querySelector("section");
console.log(firstSection);
const allSectionsByQuery = document.querySelectorAll("section");
console.log(allSectionsByQuery);
const myDivByQuery = document.querySelector("#myDiv");
console.log(myDivByQuery);

// Manipularea elementelor prin metodele getAtribute si setAtribute
const importantLink = document.querySelector("section > a");
console.log(importantLink);
importantLink.setAttribute("href","http://exemplu.com");
const href = importantLink.getAttribute("href");
console.log("href: ",href);

// Manilularea claselor de css ale elementelor:
importantLink.classList.add("important");
const lastError = document.querySelector("section > p:last-child")
console.log(lastError);
lastError.classList.remove("important");    // a fost eliminat "important"

// Crearea de elemente HTML si adaugarea lor in DOM
const parent = document.getElementById("create-elements");
const subtitle = document.createElement("h3");
parent.appendChild(subtitle);
console.log(subtitle);
subtitle.textContent = "Text";

// Stergerea de elemente:
const toDelete = document.querySelector("#delete");
toDelete.remove();

// Adaugarea de ascultatori de evenimente (functii care se activeaza cand se intampla un eveniment)
let clicLimit = 3;
let currentClick = 0;
const btn = document.querySelector("#click-me-btn");
const onClick = () => {
    alert("Butonul a fost apasat");
    currentClick++;
    if(currentClick>=clicLimit){
        // indepartarea unui ascultator de elemente
        btn.removeEventListener("click", onClick);
    }
}
btn.addEventListener("click", onClick);

// stocarea de date in localstorage
localStorage.setItem("Important data", "3 elements in cart");
const saveData = localStorage.getItem("Important data");
console.log("saved Data: ", saveData);

// stocarea de date in SessionStorage:
sessionStorage.setItem("temporary", "Temporary Data");
const tempData = sessionStorage.getItem("temporary");
console.log(tempData);