const carouselButtons = document.querySelectorAll('.button');
const carouselImage = document.querySelectorAll('.image')

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        disableSelectedButton();
        disableActiveImage();
        button.classList.add('selected');
        carouselImage[index].classList.add('active')
    })
})


function disableActiveImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function disableSelectedButton() {
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}

