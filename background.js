const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
  }

function genRandom(){ /* to let background image swap itself randomly, so used math! */
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){ /* final outcome */
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();