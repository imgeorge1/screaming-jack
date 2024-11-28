const jaw = document.getElementById('jaw');
const container = document.getElementById('head-container');
const scream = new Audio ("scream.mp3")

// Calculate movement range
const containerRect = container.getBoundingClientRect();
const minY = containerRect.top + 125; // Top of the container
const maxY = containerRect.bottom - 500; // Bottom of the container
const maxLength = 100;

document.addEventListener('mousedown', () => {
document.addEventListener('mousemove', (event) => {
  const mouseY = event.clientY;

  // Clamp mouse Y to the container bounds
  const clampedY = Math.max(minY, Math.min(maxY, mouseY));

  // Map mouse Y position to jaw angle
  const progress = (clampedY - minY) / (maxY - minY); // Range: 0 to 1
  const length = progress * maxLength;
  scream.play()
  scream.volume = length / maxLength
  console.log(scream.volume * 100 + "%")
  // Apply rotation to the jaw
  jaw.style.transform = `translateY(${length}px)`;
});
})

