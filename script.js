// ----- Modal controls -----
function openModal(id) {
  document.getElementById(id + "-modal").style.display = "block";
}

function closeModal(id) {
  document.getElementById(id + "-modal").style.display = "none";
}

// ----- Image slider (only runs if slider exists on page) -----
const images = [
  "../photos/inventory_system/inv_productpage.png",
  "../photos/inventory_system/inv_addproduct.png",
  "../photos/inventory_system/inv_addproduct2.png"
];

let currentIndex = 0;

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const sliderImage = document.getElementById("slider-image");

  if (sliderImage) {
    // initialize first image
    sliderImage.src = images[currentIndex];

    window.changeImage = function (direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      } else if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      sliderImage.src = images[currentIndex];
    };
  }
});
