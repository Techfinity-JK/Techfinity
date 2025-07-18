

const container = document.querySelector('.infinite-scroll');
const content = document.getElementById('scrollContent');

// 1) Clone the content so we have two copies back-to-back
content.innerHTML += content.innerHTML;

let pos = 0;
const speed = 1.5; // pixels per frame; tweak for faster/slower 0.5 default

function step() {
pos += speed;
// once we've scrolled half the total width, reset
if (pos >= content.scrollWidth / 2 + 10) {
    pos = 0;
}
// move the row leftwards
content.style.transform = `translateX(${-pos}px)`;
requestAnimationFrame(step);
}

// kick it off
step();

