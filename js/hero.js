const textOne = [
  "Upgrade your time keeping with",
  "Restrict area access with",
  "Ensure workplace surveillance with",
];

const textTwo = [
  "Biometrics",
  "Door Access",
  "CCTVs",
];

const heroImages = [
  "images/backgrounds/hero1a.png",
  "images/backgrounds/hero1b.png",
  "images/backgrounds/hero1c.png",
];

const wrapper = document.querySelector('.hero-text-container');
const heroImg = document.querySelector('.hero-img');
let index = 0;

function showNextText() {
  // Set text content
  wrapper.innerHTML = `
    <p class="hero-p1">${textOne[index]}</p>
    <p class="hero-p2">${textTwo[index]}</p>
  `;

  const currentOne = wrapper.querySelector('.hero-p1');
  const currentTwo = wrapper.querySelector('.hero-p2');

  // Reset image fade first, THEN update src
  heroImg.classList.remove('show');

  // Wait until fade-out completes before swapping image
  setTimeout(() => {
    heroImg.src = heroImages[index];
  }, 20); // delay helps avoid flicker

  // Fade in
  setTimeout(() => {
    currentOne.classList.add('show');
    currentTwo.classList.add('show');
    heroImg.classList.add('show');
  }, 10);

  // Fade out
  setTimeout(() => {
    currentOne.classList.remove('show');
    currentTwo.classList.remove('show');
    heroImg.classList.remove('show');

    index = (index + 1) % textOne.length;
    setTimeout(showNextText, 1000);
  }, 3000);
}

showNextText();
