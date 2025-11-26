const images = [
  'images/image1.jpeg',
  'images/image2.jpeg',
  'images/image3.jpeg',
  'images/image4.jpeg',
  'images/image5.jpeg',
  'images/image6.jpeg',
  'images/image7.jpeg',
  'images/image8.jpeg',
  'images/image9.jpeg',
  'images/image10.jpeg',
  'images/image11.jpeg',
  'images/image12.jpeg',
  'images/image13.jpeg',
  'images/image14.jpeg',
  'images/image15.jpeg',
  'images/image16.jpeg',
];

const heroSection = document.querySelector('.hero-section');
const imageContainer = document.getElementById('image-container');

// Track current image index for rotation through all images
let currentImageIndex = 0;

// Throttle function
const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
};

const createImage = throttle((e) => {
  // Use current image and rotate through all 16 images
  const randomImageIndex = currentImageIndex % images.length;
  currentImageIndex++;

  // Create new image div
  const div = document.createElement('div');
  div.classList.add('imagediv');

  const img = document.createElement('img');
  img.setAttribute('src', images[randomImageIndex]);
  div.appendChild(img);

  imageContainer.appendChild(div);

  // Set initial position off-screen below
  gsap.set(div, {
    x: e.clientX - 110,
    y: e.clientY + 50,
    opacity: 0,
    scale: 0.5,
    rotation: Math.random() * 20 - 10,
  });

  // Animate in with bouncing effect from y-axis
  const tl = gsap.timeline();

  tl.to(div, {
    opacity: 1,
    y: e.clientY - 140,
    scale: 1,
    rotation: 0,
    duration: 0.6,
    ease: 'back.out(1.7)', // Creates the bouncing effect
  })
    .fromTo(
      img,
      {
        scale: 1.3,
        y: '20%',
      },
      {
        scale: 1,
        y: '0%',
        duration: 0.5,
        ease: 'power2.out',
      },
      '<'
    )
    .to(
      div,
      {
        opacity: 0,
        y: e.clientY - 180,
        scale: 0.8,
        duration: 0.4,
        ease: 'power2.in',
      },
      '+=0.8'
    )
    .call(() => div.remove());
}, 300); // Throttle to 250ms

let isHovering = false;

heroSection.addEventListener('mouseenter', function (e) {
  isHovering = true;
  createImage(e);
});

heroSection.addEventListener('mousemove', function (e) {
  if (isHovering) {
    createImage(e);
  }
});

heroSection.addEventListener('mouseleave', function () {
  isHovering = false;
});

// Set background audio volume to low
const audio = document.querySelector('.background-audio');
if (audio) {
  audio.volume = 0.5; // 50% volume for very calm, subtle background music
}
