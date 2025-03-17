//Changing image
// function hover(element) {
//     element.setAttribute('src', 'Assets/sad.gif');
// }
  
// function unhover(element) {
//     element.setAttribute('src', 'Assets/hi.gif');
// }



//Changing background
// var button = document.getElementById('hover');
// var body = document.body;

// button.onmouseover = function() {
// 	body.className = 'hovered';
// }

// button.onmouseout = function() {
// 	body.className = '';
// }

const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const message = document.getElementById('message');
const passwordSection = document.getElementById('passwordSection');
const mainContent = document.getElementById('mainContent');

// Set the correct password
const correctPassword = "ilovekittycats"; //pass

// Add event listener to the submit button
submitButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;

  // Check if the entered password is correct
  if (enteredPassword === correctPassword) {
    passwordSection.classList.add('hidden'); // Hide the password section
    mainContent.classList.remove('hidden'); // Show the main content
  } else {
    message.textContent = "❌ Incorrect password. Try again!";
    message.style.color = "#e74c3c";
  }
});

// Optional: Allow pressing "Enter" to submit the password
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    submitButton.click();
  }
});




//Changing gif
const img = document.getElementById('image');

const images = {
    hi: "Pages/Assets/hi.gif",
    ori: "Pages/Assets/sad.gif"
}

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//Yes button bg image
var body = document.body;

function bg() {
	body.className = 'hovered';
};

function resetBG(){
	body.className = '';
};

//Linking to second page
function myFunction() {
    window.location.href = "Pages/Page 1/secondPage.html";
}