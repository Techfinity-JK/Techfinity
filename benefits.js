const buttons = document.querySelectorAll('.benefits-btn');
let currentIndex = 0;
let intervalId;

const backgroundImages = [
  'images/backgrounds/biometricbackground.png',
  'images/backgrounds/aftersalessupportbackground.png',
  'images/backgrounds/virtualuserorientationbackground.png',
  'images/backgrounds/deliverybackground.png'
];

backgroundImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBenefits(button, imageSrc, backgroundSrc, benefitsText) {

  // Change the image
  document.getElementById('benefitsImage').src = imageSrc;

  // Change the background image of the section
  document.getElementById('backgroundSection').style.backgroundImage = `url('${backgroundSrc}')`;

  // Change description
  document.getElementById('benefitsText').innerHTML = benefitsText;

  // Remove 'active' from all buttons
  const buttons = document.querySelectorAll('.benefits-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add 'active' to the clicked button
  button.classList.add('active');

  // Reset timer so it doesn't skip ahead too soon
  resetAutoCycle();
}

function autoCycle() {
  currentIndex = (currentIndex + 1) % buttons.length;
  buttons[currentIndex].click();
}

function resetAutoCycle() {
  clearInterval(intervalId);
  intervalId = setInterval(autoCycle, 3000);
}

// Start auto-cycling on page load
window.onload = () => {
  intervalId = setInterval(autoCycle, 3000);
};