const btn = document.getElementById('btn');
const colorText = document.querySelector('.color');

// Function to generate a random hex color
function getRandomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});
