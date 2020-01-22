/**
 * Display the Image the user has uploaded.
 */
function handleImage() {
  // The image File
  const selectedFile = document.getElementById("imageInput").files[0];
  // The main Canvas
  var canvas = document.getElementById("canvasContainer");
  // Context of the Canvas using the Canvas API
  var ctx = canvas.getContext("2d");

  var reader = new FileReader();
  reader.onload = function(e) {
    var image = new Image();

    // Wait for the image to be loaded.
    image.onload = function() {
      console.log("The width: ", this.width, " The Height: ", this.height);
      ctx.drawImage(image, 10, 10);
    };
    image.src = e.target.result;
  };
  reader.readAsDataURL(selectedFile);
}

/**
 * Display the slider value for Brightness
 */
function sliderValueBrig() {
  var slider = document.getElementById("brightness");
  var output = document.getElementById("brigOutput");
  output.innerHTML = slider.value;

  // Change Brightness
  controlBrightness(slider.value);
}

function controlBrightness(percentage) {
  const canvas = document.getElementById("canvasContainer");
  canvas.style.filter = "brightness(" + percentage + "%)";
}

/**
 * Display slider value for Gray Scale
 */
function sliderGrayScale() {
  var slider = document.getElementById("grayScale");
  var output = document.getElementById("grayScaleValue");
  output.innerHTML = slider.value;

  // Change to Gray Scale
  controlGrayScale(slider.value);
}

function controlGrayScale(percentage) {
  const canvas = document.getElementById("canvasContainer");
  canvas.style.filter = "grayscale(" + percentage + "%)";
}

/**
 * Display slider value for the constrast scale
 */
function sliderContrastScale() {
  var slider = document.getElementById("contrastScale");
  var output = document.getElementById("contrastScaleValue");
  output.innerHTML = slider.value;

  // Change to Gray Scale
  controlContrast(slider.value);
}

function controlContrast(percentage) {
  const canvas = document.getElementById("canvasContainer");
  canvas.style.filter = "contrast(" + percentage + "%)";
}
/**
 * Display slider value for inverting the colors
 */
function sliderInvertColors() {
  var slider = document.getElementById("invertColors");
  var output = document.getElementById("invertColorsValue");
  output.innerHTML = slider.value;

  // Change to Gray Scale
  controlColorInvert(slider.value);
}

function controlColorInvert(percentage) {
  const canvas = document.getElementById("canvasContainer");
  canvas.style.filter = "invert(" + percentage + "%)";
}
