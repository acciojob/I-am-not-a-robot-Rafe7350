//your code here
          const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
          const imageContainer = document.getElementById("imageContainer");
          const h3 = document.getElementById("h");
          const resetBtn = document.getElementById("reset");
          const verifyBtn = document.getElementById("verify");
          const para = document.getElementById("para");
          let selectedImages = [];
          let isVerifying = false;
      
          // Shuffle array
          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }
      
          // Render images
          function renderImages() {
            shuffleArray(images);
            for (let i = 0; i < images.length; i++) {
              const img = document.querySelector(`.img${i + 1}`);
              img.src = images[i];
            }
          }
      
          // Reset game
          function resetGame() {
            selectedImages = [];
            isVerifying = false;
            resetBtn.style.display = "none";
            verifyBtn.style.display = "none";
            para.innerHTML = "";
            renderImages();
          }
      
          // Check for identical images
          function checkIdenticalImages() {
            if (selectedImages.length === 2) {
              if (selectedImages[0].src === selectedImages[1].src) {
                para.innerHTML = "You are a human. Congratulations!";
              } else {
                para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
              }
              verifyBtn.style.display = "none";
              isVerifying = true;
            }
          }
      
          // Event listener for image clicks
          imageContainer.addEventListener("click", function(event) {
            const img = event.target;
            if (img.tagName === "IMG" && !isVerifying) {
              if (!selectedImages.includes(img)) {
                selectedImages.push(img);
                img.style.border = "2px solid red";
              }
              checkIdenticalImages();
            }
          });
      
          // Event listener for reset button
          resetBtn.addEventListener("click", function() {
            resetGame();
          });
      
          // Event listener for verify button
          verifyBtn.addEventListener("click", function() {
            checkIdenticalImages();
          });
      
          // Initial render
          renderImages();
      