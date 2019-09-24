// Dette event starter lige så snart HTML dokumentet er blevet loaaded
// og giver besked om at dette er en skoleopgave.


function ready() {
    alert('This is a school project');
  }

  document.addEventListener("DOMContentLoaded", ready);

// Her har jeg lavet en simpel burger-menu,
// hvor burger-ikonet er en button, som åbner
// menuen ved et klik.
// Derudover kan du klikke på mine links og
// få en alert om at de er tomme.

let menuBtn = document.querySelector('.toggle-nav');
let navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', e => {
  navLinks.classList.toggle('nav-active');
  menuBtn.classList.toggle('button-active');
});

navLinks.addEventListener("click", function() {
    alert("This link is empty!");
});

// Dette event ændrer baggrundsfarven på body ved tryk på H1 teksten.
// Bemærk at den kræver dobbeltklik første gang man klikker.
// Jeg har endnu ikke fundet årsagen til hvorfor der kræves dobbeltklik

let button = document.querySelector('h1');
button.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;
    document.body.style.backgroundColor = curColour === 'white' ? 'grey' : 'white';
});

// Dette event viser dig dato når du klikker.

document.getElementById("date-btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("result").innerHTML = Date();
}

// Dette event ændrer billedet når du klikker på det.

let img = document.getElementById("kitty");
img.addEventListener("click", function() {
  if (this.classList.contains('changed')) {
    this.src = 'kitty1.jpg';
    this.className = "";
  } else {
    this.className = "changed";
    this.src = 'kitty2.jpg';
  }
});

// Dette event generere tekst inde i div-elementet
// efter at du har indtastet det i input-feltet

let input = document.querySelector('input');
let log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
