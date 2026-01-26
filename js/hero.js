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

const heroP1 = document.querySelector('.hero-p1');
const heroP2 = document.querySelector('.hero-p2');
const heroImg = document.querySelector('.hero-img');
let index = 0;

const typingSpeed = 40;
const deleteSpeed = 25;
const pauseBeforeDelete = 2500;
const pauseBeforeNext = 500;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text) {
  element.textContent = '';
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await sleep(typingSpeed);
  }
}

async function deleteText(element) {
  const text = element.textContent;
  for (let i = text.length; i >= 0; i--) {
    element.textContent = text.substring(0, i);
    await sleep(deleteSpeed);
  }
}

async function animateHero() {
  while (true) {
    // Update image with fade
    heroImg.classList.remove('show');
    await sleep(300);
    heroImg.src = heroImages[index];
    heroImg.classList.add('show');

    // Type the first line
    heroP1.classList.add('typing');
    await typeText(heroP1, textOne[index]);
    heroP1.classList.remove('typing');

    // Type the second line (product name)
    heroP2.classList.add('typing');
    await typeText(heroP2, textTwo[index]);
    heroP2.classList.remove('typing');

    // Pause to let user read
    await sleep(pauseBeforeDelete);

    // Delete the second line first
    heroP2.classList.add('typing');
    await deleteText(heroP2);
    heroP2.classList.remove('typing');

    // Delete the first line
    heroP1.classList.add('typing');
    await deleteText(heroP1);
    heroP1.classList.remove('typing');

    // Move to next index
    index = (index + 1) % textOne.length;

    await sleep(pauseBeforeNext);
  }
}

// Start animation
animateHero();
