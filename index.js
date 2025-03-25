var images = [1, 2, 3, 4, 5, 6];
var currentImage = 0;
var slideShowInterval = undefined;
function processCurrentImage(directionNumber) {
    currentImage += directionNumber;
    if(currentImage >= 0 && currentImage <= images.length - 1) {
        return currentImage;
    } else if(currentImage <= 0) {
        currentImage = images.length - 1;
    } else {
        currentImage = 0;
    }
    return currentImage;
}
var imageLink = document.getElementById("slideshow-holder");

imageLink.src = `./SlideShow/${images[currentImage]}.jpg`;

document.getElementById("next-btn").addEventListener("click", ()=> {
    imageLink.src = `./SlideShow/${images[processCurrentImage(1)]}.jpg`;
});

document.getElementById("previous-btn").addEventListener("click", ()=> {
    imageLink.src = `./SlideShow/${images[processCurrentImage(-1)]}.jpg`;
});

document.getElementById("slideshow-btn").addEventListener("click", ()=> {
    slideShowInterval = setInterval(() => {
        imageLink.src = `./SlideShow/${images[processCurrentImage(1)]}.jpg`;
    }, 2000);
});

document.getElementById("stop-btn").addEventListener("click", ()=> {
    clearInterval(slideShowInterval);
});