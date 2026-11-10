
let mover = document.querySelector(".mover");
let message = document.querySelector(".message");


function updateClock() {
  // Get the current date and time
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();

  console.log("Seconds:", seconds);
  console.log("Minutes:", minutes);


  // Seconds range from 0 through 59.
  let newWidth = seconds + 10;
  mover.style.width = newWidth + "%";


  // MINUTES CONTROL THE COLOR AND MESSAGE

  // Minutes 0 through 19
  if (minutes < 20) {
    mover.style.backgroundColor = "magenta";
    message.textContent = "Beginning of the hour";
  }

  // Minutes 20 through 39
  else if (minutes < 40) {
    mover.style.backgroundColor = "seagreen";
    message.textContent = "Middle of the hour";
  }

  // Minutes 40 through 59
  else {
    mover.style.backgroundColor = "purple";
    message.textContent = "End of the hour";
  }
}


// Run immediately
updateClock();

// Run every second
setInterval(updateClock, 1000);