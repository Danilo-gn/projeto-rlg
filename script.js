var timeZones = ["America/Sao_Paulo", "Europe/Berlin", "Asia/Tokyo", "Australia/Sydney"];
var index = 0;
var colorMap = {
  0: "url('img/brasilia.png'), linear-gradient(180deg, #1560bd, black)",
  1: "url('img/berlin.png'), linear-gradient(180deg, #008B8B, black)",
  2: "url('img/tokyo.png'), linear-gradient(180deg, #660000, black)",
  3: "url('img/sydney.png'), linear-gradient(180deg, #FEBE10, black)"
};

var colortheme = {
  0: "#1E90FF",
  1: "#32de84",
  2: "#E23D28",
  3: "#FFFF00",
}

var bgcolor = {
  0: "linear-gradient(270deg, rgb(0, 2, 37), rgb(0, 0, 61), rgb(33, 57, 136))",
  1: "linear-gradient(270deg, #00563B, #018749, #00693E)",
  2: "linear-gradient(270deg, #58111A, #660000, #A52A2A)",
  3: "linear-gradient(270deg, #FEBE10, #FFC72C, #FFD700)",
}

function updateTime() {
  var date = new Date();
  if (index > 0) {
    date = new Date(date.toLocaleString("en-US", {timeZone: timeZones[index]}));
  }
  document.getElementById('clock').innerHTML = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function changebgSelect() {
  var colorBG = document.getElementById("timezoneSelect").value;
  var color = bgcolor[colorBG];
  var selebg = document.querySelector(".drop");
  selebg.style.backgroundImage = color;
}

function changecolorTheme() {
  var colorIndex = document.getElementById("timezoneSelect").value;
  var color = colortheme[colorIndex];
  var relogiop = document.querySelector(".relogio");
  var drops = document.querySelector(".drop:hover, .drop:focus, .drop:active");
  var tituloh = document.querySelector(".titulo");
  relogiop.style.borderColor = color;
  relogiop.style.color = color;
  drops.style.borderColor = color;
  drops.style.color = color;
  tituloh.style.borderColor = color;
  tituloh.style.color = color;
}

function changeBackgroundColor() {
  var colorValue = document.getElementById("timezoneSelect").value;
  var color = colorMap[colorValue];
  var containerDiv = document.querySelector(".container");
  containerDiv.style.backgroundImage = color;
}

let btnAceitar = document.getElementById("btnAceitar");
btnAceitar.addEventListener("click", aceitaCookie);

if(localStorage.getItem("aceitouCookie" == "1")) {
  aceitaCookie();
}

function aceitaCookie() {
  let divMsg = document.getElementById("cookieId");
  divMsg.classList.add("oculto");

  localStorage.setItem("aceitouCookie", "1")
}

document.getElementById("btnAceitar").addEventListener("click", function() {
  document.getElementById("cookieID").style.display = "none";
});

function changeTimeZone(value) {
  index = value;
  updateTime();
  changeBackgroundColor();
  changecolorTheme();
  changebgSelect();
}

setInterval(updateTime, 1000);