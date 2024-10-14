const slider = document.getElementById('slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;

// Function to show the current set of images
function showImages(index) {
    sliderWrapper.style.transform = `translateX(-${index * (100 / 5)}%)`; // Move the slider
}

// Function to automatically switch images
function autoSlide() {
    currentIndex = (currentIndex + 1) % (images.length - 4); // Adjust for loop with 10 images
    showImages(currentIndex);
}

// Start the automatic sliding every 5 seconds
setInterval(autoSlide, 5000);
