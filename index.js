
// start toggle icon
let icon = document.querySelector("#menue-icon");
let iconClose = document.querySelector("#menue-close");
let navbar = document.querySelector(".header .navbar");

// show navbar on click icon
icon.addEventListener('click', () => {
    icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})




let header = document.querySelector(".header");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".header .navbar a");
let anmiText1 = document.querySelector('.contact-content .text h3 span');
let anmiText2 = document.querySelector('.contact-content .text span span');
window.onscroll = function () {
    sections.forEach(sec => {
        let offSet = sec.offsetTop - 250;
        let secHeight = sec.offsetHeight;
        let top = window.scrollY
        let secId = sec.getAttribute("id");

        // add background for header
        header.classList.toggle('sticky', scrollY > 100);
        // check if the section in visible screen
        if (top > offSet && top < offSet + secHeight) {
            // cheak any link to visible section
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute("href") == `#${secId}`) {
                    link.classList.add('active');
                }
            })

            // add anmtion on scroll
            sections.forEach(sec => {
                sec.classList.remove('animate-sec');
            })
            sec.classList.add('animate-sec');

            if (sec.getAttribute('id') == 'contact') {
                anmiText1.classList.add('anmi-text1');
                anmiText2.classList.add('anmi-text2')
            } else {
                anmiText1.classList.remove('anmi-text1');
                anmiText2.classList.remove('anmi-text2')
            }
        }
    })
    icon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// slider blog

const wrapper = document.querySelector(".wrapper .blog");
const box = document.querySelector(".wrapper .blog .box");
const boxes = document.querySelectorAll(".wrapper .blog .box");
const pervBtn = document.querySelector(".container .left-btn");
const nextBtn = document.querySelector(".container .right-btn");

let widthBox = box.offsetWidth;
console.log(boxes);

let boxesShow;

// window.addEventListener("resize", numberBoxes());
numberBoxes();
function numberBoxes() {
    if (window.innerWidth < 570) {
        boxesShow = 1;
    } else if (window.innerWidth < 767) {
        boxesShow = 2;
    } else if (window.innerWidth < 992) {
        boxesShow = 3;
    } else {
        boxesShow = 4;
    }
}
let currSlide = 0
nextBtn.addEventListener("click", () => {
    pervBtn.classList.remove('disabeld')
    if (currSlide == boxes.length - boxesShow) {
        nextBtn.classList.add("disabeld")
    } else {
        nextBtn.classList.remove("disabeld")
        currSlide++;
        updateSlide(currSlide);
    }

})
pervBtn.addEventListener("click", () => {
    nextBtn.classList.remove("disabeld")
    if (currSlide === 0) {
        pervBtn.classList.add('disabeld')
    } else {
        pervBtn.classList.remove('disabeld')
        currSlide--;
        updateSlide(currSlide)
    }

})




function updateSlide(currSlide) {
    console.log(`${-(currSlide * (widthBox + 20))}`);
    wrapper.style.transform = `translateX(${(-currSlide * (widthBox + 20))}px)`;
}


