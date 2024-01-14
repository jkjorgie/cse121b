const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSect = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE121b";
const newPar = document.createElement("p");
newPar.innerText = "Welcome to Javascript Language";
newSect.appendChild(newH2);
newSect.appendChild(newPar);
document.body.appendChild(newSect);