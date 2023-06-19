window.addEventListener('DOMContentLoaded', () => {
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const hexValue = document.getElementById('hex-value');
  const container = document.querySelector('.container');

  function updateBackground() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const hex = convertRGBToHex(red, green, blue);

    container.style.backgroundColor = convertRGBToCSS(red, green, blue);
    hexValue.textContent = hex;
    hexValue.style.color = convertRGBToCSS(255 - red, 255 - green, 255 - blue);
  }

  function convertRGBToHex(red, green, blue) {
    const hex = ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0');
    return `#${hex}`;
  }

  function convertRGBToCSS(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
  }

  redSlider.addEventListener('input', updateBackground);
  greenSlider.addEventListener('input', updateBackground);
  blueSlider.addEventListener('input', updateBackground);
});
