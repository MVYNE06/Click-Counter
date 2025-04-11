// This is a simple click counter that increments a count each time a button is clicked.
let count = 0;

// This function plays a sound when the button is clicked.
const clickSound = new Audio('click.mp3');

document.getElementById('clickButton').addEventListener('click', () => {count++; 
  document.getElementById('counter').innerText = count;

 // Play the sound
 clickSound.play();

 // Changes background color randomly
 const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
 document.body.style.backgroundColor = randomColor;
});