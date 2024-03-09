const slides = document.querySelectorAll('#slider div')
const dots = document.querySelectorAll('#slider-dots li')
const slidesCount = slides.length
let currentSlide = slidesCount - 1

// hide all slides and make all dots unfilled
function hideAll() {
    for (let i = 0; i < slidesCount; i++) {
        slides[i].classList.remove('block')
        slides[i].classList.add('hidden')           // slides become hidden
        dots[i].classList.remove('bg-[#3E3E3E]')    // dots become unfilled
    }
}

// set current slide
function setCurrentSlide(number) {
    hideAll()                                       // hide slides and unfill dots
    slides[number].classList.remove('hidden')       // display current slide
    slides[number].classList.add('block')
    dots[number].classList.add('bg-[#3E3E3E]')      // fill current dot
}

// add event listenters for dots
for (let i = 0; i < slidesCount; i++) {
    dots[i].addEventListener('click', () => {
        setCurrentSlide(i)
    })
}

// start sliding
function startSliding() {
    // switch slides by cicle
    if (currentSlide === slidesCount - 1) {
        currentSlide = 0
        setCurrentSlide(currentSlide)
    }
    else {
        currentSlide++
        setCurrentSlide(currentSlide) 
    }

    // recursive call current function
    setTimeout(() => {
        startSliding()
    }, 3000)
}

startSliding()