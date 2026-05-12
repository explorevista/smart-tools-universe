import {

  auth,
  db,
  provider,

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,

  signInWithPopup,

  onAuthStateChanged,

  doc,
  setDoc

} from "./firebase-config.js";

/* GRID */

const toolsGrid =
document.querySelector(".tools-grid");

let currentCategory = "all";

/* RENDER */

function renderTools(){

toolsGrid.innerHTML = "";

let searchValue =
document
.getElementById("search")
.value
.toLowerCase();

let filteredTools =
tools.filter(tool => {

let matchesSearch =
tool.name.toLowerCase()
.includes(searchValue);

let matchesCategory =
currentCategory === "all"
||
tool.category === currentCategory;

return matchesSearch
&&
matchesCategory;

});

filteredTools.forEach(tool => {

let badge =
tool.premium

?

`<span class="premium-badge">
PREMIUM
</span>`

:

`<span class="free-badge">
FREE
</span>`;

let card = `

<div class="tool-card
${tool.premium ? 'premium-tool' : ''}"

onclick="openTool('${tool.link}')">

<img src="${tool.image}"
class="tool-image">

<div class="tool-content">

<div class="tool-top">

<div class="tool-icon">
${tool.icon}
</div>

${badge}

</div>

<h3>${tool.name}</h3>

<p>${tool.description}</p>

</div>

</div>
`;

toolsGrid.innerHTML += card;

});

}

/* OPEN TOOL */

window.openTool = function(link){

showToast();

setTimeout(() => {

window.location.href = link;

},700);

}

/* SEARCH */

document
.getElementById("search")
.addEventListener("input", renderTools);

/* FILTER */

window.filterCategory =
function(category){

currentCategory = category;

renderTools();

}

/* SIDEBAR */

window.toggleSidebar =
function(){

document
.getElementById("sidebar")
.classList
.toggle("active");

}

/* THEME */

let darkMode = true;

window.toggleTheme =
function(){

if(darkMode){

document.body.style.background =
"#f8fafc";

document.body.style.color =
"#0f172a";

darkMode = false;

}else{

document.body.style.background =
"#0b1120";

document.body.style.color =
"white";

darkMode = true;

}

}

/* TOAST */

function showToast(){

const toast =
document.getElementById("toast");

toast.classList.add("show");

setTimeout(() => {

toast.classList.remove("show");

},2500);

}

/* MODAL */

window.openModal =
function(){

document
.getElementById("premiumModal")
.style.display = "flex";

}

window.closeModal =
function(){

document
.getElementById("premiumModal")
.style.display = "none";

}

/* AUTH MODAL */

window.openAuthModal =
function(){

document
.getElementById("authModal")
.style.display = "flex";

}

window.closeAuthModal =
function(){

document
.getElementById("authModal")
.style.display = "none";

}

/* SIGNUP */

window.signup =
async function(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

try{

const userCredential =

await createUserWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

await setDoc(
doc(db, "users", user.uid),

{
name:"Smart User",
email:user.email,
role:"user",
status:"active",
createdAt:new Date().toISOString()
}

);

alert("Signup Successful");

closeAuthModal();

}catch(error){

alert(error.message);

}

}

/* LOGIN */

window.login =
async function(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Login Successful");

closeAuthModal();

}catch(error){

alert(error.message);

}

}

/* GOOGLE LOGIN */

window.googleLogin =
async function(){

try{

const result =
await signInWithPopup(
auth,
provider
);

const user = result.user;

await setDoc(
doc(db, "users", user.uid),

{
name:user.displayName,
email:user.email,
role:"user",
status:"active",
createdAt:new Date().toISOString()
}

);

alert("Google Login Successful");

closeAuthModal();

}catch(error){

alert(error.message);

}

}

/* USER STATE */

onAuthStateChanged(auth,
(user)=>{

if(user){

document.querySelector(".profile")
.innerHTML =
`👤 ${user.email}`;

}else{

document.querySelector(".profile")
.innerHTML =
"👤 Account";

}

});

/* LOAD */

renderTools();
