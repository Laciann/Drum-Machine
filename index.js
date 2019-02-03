//for detecting html/css button press

let numberOfDrumButtons = document.querySelectorAll('.drum').length;

 for (let i = 0; i < numberOfDrumButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener('click', function () {

     let buttonId = this.id;
     makeSound(buttonId);
   });
 }

// for detecting keyboard key press
 document.addEventListener('keypress', function (event) {
    makeSound(event.key);
 })

 //function for mapping button/key to sound
 function makeSound(key) {

   switch (key) {
     case "a":
       CssKeyPress('a');
       var audio = new Audio('./sounds/tom1.mp3');
       audio.play();
       break;

     case "s":
       CssKeyPress('s');
       var audio = new Audio('./sounds/tom2.mp3');
       audio.play();
       break;

     case "d":
       CssKeyPress('d');
       var audio = new Audio('./sounds/tom3.mp3');
       audio.play();
       break;

     case "z":
       CssKeyPress('z');
       var audio = new Audio('./sounds/kick.mp3');
       audio.play();
       break;

     case "x":
       CssKeyPress('x');
       var audio = new Audio('./sounds/hat.mp3');
       audio.play();
       break;

     case "c":
       CssKeyPress('c');
       var audio = new Audio('./sounds/snare.mp3');
       audio.play();
       break;

     case " ":
       CssKeyPress(' ');
       var audio = new Audio('./sounds/clap.mp3');
       audio.play();
       break;

     default:
       console.log(this.event.key);
       break;
   }
 }

 // change css of the pressed key (button down)

let CssKeyPress = function (id) {
  let getId = document.getElementById(id);
  getId.classList.add('keypress')
  setTimeout(function () {
    getId.classList.remove('keypress')
  },
    500);
}


 // let audio = new Audio('./sounds/clap.mp3');
 // audio.play();

