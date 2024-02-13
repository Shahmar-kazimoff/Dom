// var myDiv = document.getElementById("myDiv");

// var ulElement = document.createElement("ul");

// var liElement = document.createElement("li");

// var aElement = document.createElement("a");

// var pElement = document.createElement("p");

// pElement.textContent = "dinamik yardilib";

// aElement.appendChild(pElement);

// liElement.appendChild(aElement);

// ulElement.appendChild(liElement);

// myDiv.appendChild(ulElement);
const header = document.getElementsByTagName("header")[0]
const navbar = document.createElement("navbar")
const img = document.createElement("img")
img.src = "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png"
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const a1 = document.createElement("a")
const a2 = document.createElement("a")
const a3 = document.createElement("a")
const a4 = document.createElement("a")
const a5 = document.createElement("a")
a1.textContent = "Home"
a2.textContent = "About"
a3.textContent = "Contact"
a4.textContent = "Blog"
a5.textContent = "Service"
a1.href = "google.com"
a2.href = "google.com"
a3.href = "google.com"
a4.href = "google.com"
a5.href = "google.com"
li1.append(a1)
li2.append(a2)
li3.append(a3)
li4.append(a4)
li5.append(a5)
ul.append(li1, li2, li3, li4, li5)
navbar.append(img)
navbar.append(ul)
header.append(navbar)
img.style.cursor = "pointer"
img.style.width = "40px"
img.style.height = "40px"
navbar.style.height = "80px"
navbar.style.backgroundColor = "#315999"
navbar.style.display = "flex"
navbar.style.justifyContent = "space-around"
navbar.style.alignItems = "center"
ul.style.display = "flex"
ul.style.gap = "20px"
a1.style.textDecoration = "none"
a2.style.textDecoration = "none"
a3.style.textDecoration = "none"
a4.style.textDecoration = "none"
a5.style.textDecoration = "none"
a1.style.color = "white"
a2.style.color = "white"
a3.style.color = "white"
a4.style.color = "white"
a5.style.color = "white"
li1.style.listStyle = "none"
li2.style.listStyle = "none"
li3.style.listStyle = "none"
li4.style.listStyle = "none"
li5.style.listStyle = "none"
