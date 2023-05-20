const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton =  document.querySelector('.carousel__button--rigth');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide)=> {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide' || 'current-slide2');
    
}
const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide')
}

prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = (currentSlide.previousElementSibling);
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = (currentSlide.nextElementSibling);
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)
})
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot);

})

//CAROUSEL 2
const track2 = document.querySelector('.carousel__track2');
const slides2 = Array.from(track2.children);
const nextButton2 =  document.querySelector('.carousel__button--rigth2');
const prevButton2 = document.querySelector('.carousel__button--left2');
const dotsNav2 = document.querySelector('.carousel__nav2')
const dots2 = Array.from(dotsNav2.children);

const slideSize2 = slides2[0].getBoundingClientRect();
const slideWidth2 = slideSize2.width;

const setSlidePosition2 = (slide, index) => {
    slide.style.left = slideWidth2 * index + 'px';
}

slides2.forEach(setSlidePosition2)

const updateDots2 = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide2');
    targetDot.classList.add('current-slide2')
}
const moveToSlide2 = (track, currentSlide, targetSlide)=> {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove( 'current-slide2');
    targetSlide.classList.add( 'current-slide2');
    
}
prevButton2.addEventListener('click', e =>{
    const currentSlide = track2.querySelector('.current-slide2')
    const prevSlide = (currentSlide.previousElementSibling);
    const currentDot = dotsNav2.querySelector('.current-slide2');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide2(track2, currentSlide, prevSlide)
    updateDots2(currentDot, prevDot)
})
nextButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2')
    const nextSlide = (currentSlide.nextElementSibling);
    const currentDot = dotsNav2.querySelector('.current-slide2')
    const nextDot = currentDot.nextElementSibling;

    moveToSlide2(track2, currentSlide, nextSlide)
    updateDots2(currentDot, nextDot)
})

dotsNav2.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;
    
    const currentSlide = track2.querySelector('.current-slide2');
    const currentDot = dotsNav2.querySelector('.current-slide2');
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    const targetSlide = slides2[targetIndex];
    moveToSlide2(track2, currentSlide, targetSlide)
    updateDots2(currentDot, targetDot)
})
//CAROUSEL 3
const track3 = document.querySelector('.carousel__track3');
const slides3 = Array.from(track3.children);
const nextButton3 =  document.querySelector('.carousel__button--rigth3');
const prevButton3 = document.querySelector('.carousel__button--left3');
const dotsNav3 = document.querySelector('.carousel__nav3')
const dots3 = Array.from(dotsNav3.children);

const slideSize3 = slides3[0].getBoundingClientRect();
const slideWidth3 = slideSize3.width;

const setSlidePosition3 = (slide, index) => {
    slide.style.left = slideWidth3 * index + 'px';
}

slides3.forEach(setSlidePosition3)

const updateDots3 = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide3');
    targetDot.classList.add('current-slide3')
}
const moveToSlide3 = (track, currentSlide, targetSlide)=> {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove( 'current-slide3');
    targetSlide.classList.add( 'current-slide3');
    
}
prevButton3.addEventListener('click', e =>{
    const currentSlide = track3.querySelector('.current-slide3')
    const prevSlide = (currentSlide.previousElementSibling);
    const currentDot = dotsNav3.querySelector('.current-slide3');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide3(track3, currentSlide, prevSlide)
    updateDots3(currentDot, prevDot)
})
nextButton3.addEventListener('click', e => {
    const currentSlide = track3.querySelector('.current-slide3')
    const nextSlide = (currentSlide.nextElementSibling);
    const currentDot = dotsNav3.querySelector('.current-slide3')
    const nextDot = currentDot.nextElementSibling;

    moveToSlide3(track3, currentSlide, nextSlide)
    updateDots3(currentDot, nextDot)
})

dotsNav3.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;
    
    const currentSlide = track3.querySelector('.current-slide3');
    const currentDot = dotsNav3.querySelector('.current-slide3');
    const targetIndex = dots3.findIndex(dot => dot === targetDot);
    const targetSlide = slides3[targetIndex];
    moveToSlide3(track3, currentSlide, targetSlide)
    updateDots3(currentDot, targetDot)
})
