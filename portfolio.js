document.getElementById("left").onmouseover = mouseOver;
document.getElementById("left").onmouseout = mouseOut;

function mouseOver() {
  document.getElementById("left").style.backgroundColor = "#f58f7c";
}

function mouseOut() {
  document.getElementById("left").style.backgroundColor = "#f2c4ce";
}

function myFunction() {
  document.getElementById("footer").innerHTML = `
    <div>
    <img src="./PacMenExercise.png" alt="PacMenExercise" width="500px" height="auto">
    <p>
      Push the “add packman” button to add PackMen images in the windows and
      push the “start game” button to move those packMen by their own.
      <a href="https://github.com/Kuromay5577/PacMen-Exercise" class="link" target="_blank">
      Go to PacMen GitHub Repository
    </a>
    </div>`;
}

document.getElementById("middle").onmouseover = mouseOver1;
document.getElementById("middle").onmouseout = mouseOut1;

function mouseOver1() {
  document.getElementById("middle").style.backgroundColor = "#f58f7c";
}

function mouseOut1() {
  document.getElementById("middle").style.backgroundColor = "#f2c4ce";
}

function myFunction1() {
  document.getElementById("footer").innerHTML = `
  <div>
  <img src="./EyeExercise.png" alt="EyeExercise" width="500px" height="auto">
  <p>
    creates two eyes in the webpage. the eyes follow the mouse. 
    This exercise uses HTML, Java Script, and CSS.
    <a href="https://github.com/Kuromay5577/Eye-Exercise" class="link" target="_blank">
      Go to Eye Exercise GitHub Repository
    </a>
    </div>`;
}

document.getElementById("right").onmouseover = mouseOver2;
document.getElementById("right").onmouseout = mouseOut2;

function mouseOver2() {
  document.getElementById("right").style.backgroundColor = "#f58f7c";
}

function mouseOut2() {
  document.getElementById("right").style.backgroundColor = "#f2c4ce";
}

function myFunction2() {
  document.getElementById("footer").innerHTML = `
  <div>
  <img src="./BusTracking.png" alt="BusTracking" width="500px" height="auto">
  <p>
    Using an API to get the real time bus stop schedule of Portland, Oregon. 
    Changes the color of the map and shows the real bus stop location with makers.
    <a href="https://github.com/Kuromay5577/Real-Time-Bus-Tracker" class="link" target="_blank">
      Go to Real TIme Bus Tracker Exercise GitHub Repository
    </a>
    </div>`;
}
