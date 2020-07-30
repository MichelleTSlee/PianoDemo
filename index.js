var numberOfNotes = document.querySelectorAll(".piano").length;
var audioA = new Audio("sounds/c.wav");
var audioS = new Audio("sounds/d.wav");
var audioD = new Audio("sounds/e.wav");
var audioF = new Audio("sounds/g.wav");
var note;

for (i = 0; i < numberOfNotes; i++) {
  document.querySelectorAll(".piano")[i].addEventListener("click", function () {
    note = this.id;
    selectNote(note);
    playAnimation(note);
  });
}

document.addEventListener("keydown", function (event) {
  note = event.key.toUpperCase();
  selectNote(note);
  playAnimationNote(note);
});

function selectNote(note) {
  switch (note) {
    case "A":
      audioA.play();
      break;
    case "S":
      audioS.play();
      break;
    case "D":
      audioD.play();
      break;
    case "F":
      audioF.play();
      break;
    default:
      console.log("No note");
      break;
  }
}

function playAnimation(note) {
  var button = document.querySelector("#" + note);
  button.classList.add("selected");
  setTimeout(function () {
    button.classList.remove("selected");
  }, 100); //0.1 seconds
}
