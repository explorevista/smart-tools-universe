import {
auth,
onAuthStateChanged,
signOut
}
from "./firebase-config.js";

/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load",()=>{

const loader =
document.getElementById("pageLoader");

setTimeout(()=>{

if(loader){

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}

},1200);

});

/* =========================
   FIREBASE AUTH
========================= */

onAuthStateChanged(auth,(user)=>{

if(user){

const userName =
document.getElementById("userName");

const userEmail =
document.getElementById("userEmail");

if(userName){

userName.innerHTML =
user.displayName || "Smart User";

}

if(userEmail){

userEmail.innerHTML =
user.email || "user@email.com";

}

}else{

window.location.href =
"../index.html";

}

});

/* =========================
   LOGOUT SYSTEM
========================= */

window.logoutUser =
async function(){

try{

await signOut(auth);

window.location.href =
"../index.html";

}catch(error){

console.error(error);

alert("Logout failed");

}

}

/* =========================
   MOBILE SIDEBAR
========================= */

const sidebar =
document.getElementById("sidebar");

const menuBtn =
document.getElementById("menuBtn");

const closeSidebar =
document.getElementById("closeSidebar");

const overlay =
document.getElementById("mobileOverlay");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.add("active");

overlay.classList.add("active");

});

}

if(closeSidebar){

closeSidebar.addEventListener("click",()=>{

sidebar.classList.remove("active");

overlay.classList.remove("active");

});

}

if(overlay){

overlay.addEventListener("click",()=>{

sidebar.classList.remove("active");

overlay.classList.remove("active");

});

}

/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
document.getElementById("themeToggle");

let darkMode = true;

if(themeToggle){

themeToggle.addEventListener("click",()=>{

if(darkMode){

document.body.style.background =
"#f3f4f6";

document.body.style.color =
"#111827";

themeToggle.innerHTML = "☀️";

darkMode = false;

}else{

document.body.style.background =
"#050816";

document.body.style.color =
"white";

themeToggle.innerHTML = "🌙";

darkMode = true;

}

});

}

/* =========================
   ACTIVE MENU SYSTEM
========================= */

const menuItems =
document.querySelectorAll(".sidebar-menu li");

menuItems.forEach((item)=>{

item.addEventListener("click",()=>{

menuItems.forEach((nav)=>{

nav.classList.remove("active");

});

item.classList.add("active");

});

});

/* =========================
   PREMIUM TOOL LOCK
========================= */

const premiumTools =
document.querySelectorAll(".premium-tool button");

premiumTools.forEach((button)=>{

button.addEventListener("click",()=>{

alert(
"Premium subscription required to access this AI tool."
);

});

});

/* =========================
   FAKE ANALYTICS LOADING
========================= */

const statsCards =
document.querySelectorAll(".stats-card");

statsCards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform = "translateY(40px)";

setTimeout(()=>{

card.style.transition = "0.6s";

card.style.opacity = "1";

card.style.transform = "translateY(0px)";

},300 * index);

});

/* =========================
   TOOL CARD HOVER EFFECT
========================= */

const toolCards =
document.querySelectorAll(".tool-card");

toolCards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px) scale(1)";

});

});

/* =========================
   REAL TIME CLOCK
========================= */

const dashboardTitle =
document.querySelector(".topbar-left p");

function updateClock(){

const now = new Date();

const time =
now.toLocaleTimeString();

if(dashboardTitle){

dashboardTitle.innerHTML =
`Welcome back • ${time}`;

}

}

setInterval(updateClock,1000);

/* =========================
   SMART SEARCH FILTER
========================= */

const searchInput =
document.querySelector(".sidebar-search input");

if(searchInput){

searchInput.addEventListener("keyup",(e)=>{

const value =
e.target.value.toLowerCase();

menuItems.forEach((item)=>{

const text =
item.innerText.toLowerCase();

if(text.includes(value)){

item.style.display = "flex";

}else{

item.style.display = "none";

}

});

});

}

/* =========================
   NOTIFICATION BUTTON
========================= */

const notifyBtn =
document.querySelectorAll(".topbar-icon")[1];

if(notifyBtn){

notifyBtn.addEventListener("click",()=>{

alert(
"You have 3 new Smart Tools notifications."
);

});

}

/* =========================
   HERO BUTTONS
========================= */

const heroButtons =
document.querySelectorAll(".hero-buttons button");

heroButtons.forEach((button)=>{

button.addEventListener("click",()=>{

alert(
"Feature panel coming in next premium update."
);

});

});

/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const allButtons =
document.querySelectorAll("button");

allButtons.forEach((button)=>{

button.addEventListener("click",(e)=>{

const ripple =
document.createElement("span");

ripple.classList.add("ripple");

button.appendChild(ripple);

const x =
e.clientX - e.target.offsetLeft;

const y =
e.clientY - e.target.offsetTop;

ripple.style.left = `${x}px`;

ripple.style.top = `${y}px`;

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* =========================
   CONSOLE BRANDING
========================= */

console.log(
"%c SMART TOOLS UNIVERSE ",
"background:#7c3aed;color:white;padding:10px 20px;border-radius:10px;font-size:16px;font-weight:bold;"
);

console.log(
"%c Premium SaaS Dashboard Loaded Successfully",
"color:#06b6d4;font-size:14px;"
);
