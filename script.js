//your code here
// Get all the image elements
const images = document.querySelectorAll('img');
// Get the reset button element
const resetBtn = document.getElementById('reset');
// Get the verify button element
const verifyBtn = document.getElementById('verify');
// Get the result paragraph element
const para = document.getElementById('para');
// Create an array to store the clicked images
let clickedImages = [];

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        // If the clicked image is already in the clickedImages array, return
        if (clickedImages.includes(image)) return;
        // Add the clicked image to the clickedImages array
        clickedImages.push(image);
        // Change the border color of the clicked image
        image.style.border = '2px solid blue';
        // If two images are clicked, show the verify button and disable further clicks on images
        if (clickedImages.length === 2) {
            verifyBtn.style.display = 'block';
            images.forEach(img => img.style.pointerEvents = 'none');
        }
    });
});

// Add click event listener to the reset button
resetBtn.addEventListener('click', () => {
    // Reset the clickedImages array
    clickedImages = [];
    // Hide the verify button
    verifyBtn.style.display = 'none';
    // Reset the border color of all images and enable clicks on images
    images.forEach(img => {
        img.style.border = 'none';
        img.style.pointerEvents = 'auto';
    });
});

// Add click event listener to the verify button
verifyBtn.addEventListener('click', () => {
    // Check if the clicked images are identical
    if (clickedImages[0].classList.value === clickedImages[1].classList.value) {
        // Display the "You are a human. Congratulations!" message
        para.innerHTML = 'You are a human. Congratulations!';
    } else {
        // Display the "We can't
