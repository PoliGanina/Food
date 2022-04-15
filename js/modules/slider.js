function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          slider1 = document.querySelector('.offer__slider'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;
    
    slider1.style.overflow = 'hidden';
    
    console.log(getComputedStyle(slider1).width);
    console.log(width);
    let slideInd = 1;
    let offset = 0;
    current.textContent = `0${slideInd}`;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
        console.log(slide.style.width);
    });

    
    function addZero(num) {
        if (slides.length < 10) {
            current.textContent = `0${num}`;
        } else {
            current.textContent = `${num}`;
        }
    }

    function activateDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideInd - 1].style.opacity = 1;
    }
    
    btnNext.addEventListener('click', () => {

        if (offset == ((slides.length - 1) * +width.replace(/\D/g, ''))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');

        }

        console.log(width);
        console.log(+width.replace(/\D/g, ''));
        console.log(offset);
        

        slidesField.style.transform = `translate(-${offset}px)`;

        if (slideInd == slides.length) {
            slideInd = 1;
        } else {
            slideInd++;
        }
        addZero(slideInd);
        activateDots();
    });

    btnPrev.addEventListener('click', () => {

        if (offset == 0) {
            offset = (slides.length - 1) * +width.replace(/\D/g, '');
        } else {
            offset -= +width.replace(/\D/g, ''); // + сделает из строки "500px" число, а слайс убирает px.
        }

        slidesField.style.transform = `translate(-${offset}px)`;

        if (slideInd == 1) {
            slideInd = 4;
        } else {
            slideInd--;
        }
        addZero(slideInd);
        activateDots();
    });

    const slider = document.querySelector('.offer__slider'),
          dotWrapper = document.createElement('ol'),
          dots = [];
    
    slider.style.position = 'relative';
    dotWrapper.classList.add('carousel-indicators');
    dotWrapper.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(dotWrapper);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dotWrapper.append(dot);
        dots.push(dot);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

                slideInd = slideTo;
                offset = +width.replace(/\D/g, '') * (slideTo - 1);

                slidesField.style.transform = `translateX(-${offset}px)`;
                addZero(slideInd);
                activateDots();
        });
    });

    // showSlides(slideInd);
    // current.textContent = `0${slideInd}`;

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideInd = 1;
    //     }

    //     if (n < 1) {
    //         slideInd = slides.length;
    //     }

    //     slides.forEach(slide => {
    //         slide.classList.add('hide' );
    //         slide.classList.remove('show', 'fade');
    //     });

    //     slides[slideInd-1].classList.add('show', 'fade');
    //     slides[slideInd-1].classList.remove('hide');

    //     if (slides.length < 10) {
    //         current.textContent =  `0${slideInd}`;
    //     } else {
    //         current.textContent =  slideInd;
    //     }
    // }

    // function plusSlides (n) {
    //     showSlides(slideInd += n);
    // }


    // btnPrev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // btnNext.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    // DOTS for carousel

    

}

export default slider;