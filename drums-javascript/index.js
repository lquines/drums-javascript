
// Button Clicked
let buttonCount = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttonCount; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);

  });
}


// Key Pressed
document.addEventListener("keydown", function(event) {

  playSound(event.key);
  animateButton(event.key);

});


// Play Sound
function playSound(key) {

  let audio = new Audio();

  switch (key) {
    case "w":
      audio.src = "sounds/tom-1.mp3";
      break;
    case "a":
      audio.src = "sounds/tom-2.mp3";
      break;
    case "s":
      audio.src = "sounds/tom-3.mp3";
      break;
    case "d":
      audio.src = "sounds/tom-4.mp3";
      break;
    case "j":
      audio.src = "sounds/crash.mp3";
      break;
    case "k":
      audio.src = "sounds/kick-bass.mp3";
      break;
    case "l":
      audio.src = "sounds/snare.mp3";
      break;
    default:
      // console.log(alert(key + " was cliked."));
  }
  audio.play();
}

function animateButton(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  // activeButton.className += " pressed";

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
