// Reveal section-a
const sectionA = document.querySelector("#section-a");
setTimeout(()=>{
    sectionA.classList.remove("menu-txt--hidden");
}, 200);
// Menu hidden
const html = document.querySelector(".html");
const menu = document.querySelector(".menu");
const menuLines = document.querySelector(".menu-lines");
const menuUl = document.querySelector(".menu-ul");
const hideMenuX = document.querySelector(".x");
const logo = document.querySelector(".logo");
const overlay = document.querySelector(".overlay");
const header1 = document.querySelector(".welcome");
const headerText = document.querySelector(".header__text");
const openMenu = function() {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    html.style.overflowY = "hidden";
};
const closeMenu = function() {
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
    html.style.overflowY = "auto";
};
menuLines.addEventListener("click", openMenu);
hideMenuX.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
menuUl.addEventListener("click", closeMenu);
// Menu X scale effect
const x = document.querySelector(".x");
x.addEventListener("mouseenter", function() {
    x.style.transform = "scale(1.5)";
});
x.addEventListener("mouseleave", function() {
    x.style.transform = "scale(1)";
    x.style.transition = "0.5s";
});
// Menu-lines Hover effect
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const menuTxt = document.querySelector(".menu-txt");
menuLines.addEventListener("mouseenter", function() {
    line1.style.transform = `translateY(-5px)`;
    line2.style.transform = `translateY(5px)`;
    menuTxt.classList.remove("menu-txt--hidden");
});
menuLines.addEventListener("mouseleave", function() {
    line1.style.transition = "1s";
    line2.style.transition = "1s";
    menuTxt.style.transition = "1s";
    line1.style.transform = `translateY(0)`;
    line2.style.transform = `translateY(0)`;
    menuTxt.classList.add("menu-txt--hidden");
});
// Menu scrolling to section
document.querySelector(".menu-ul").addEventListener("click", function(e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains("menu-link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    }
});
// Slider home
const slider = function() {
    const slides = document.querySelectorAll(".photo-container");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const touchable = document.querySelector(".slider-container");
    let curSlide = 0;
    const maxSlide = slides.length;
    // Functions
    const goToSlide = function(slide) {
        slides.forEach((s, i)=>{
            s.style.transform = `translateX(${200 * (i - slide)}%)`;
        });
    };
    // Next slide
    const nextSlide = function() {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;
        goToSlide(curSlide);
    };
    // Prev slide
    const prevSlide = function() {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;
        goToSlide(curSlide);
    };
    const init = function() {
        goToSlide(0);
    };
    init();
    // Event Handler
    btnLeft.addEventListener("click", prevSlide);
    btnRight.addEventListener("click", nextSlide);
    document.addEventListener("keydown", function(e) {
        console.log(e);
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
    });
    touchable.addEventListener("touchmove", function(e) {
        nextSlide();
    });
};
slider();
// Slider testimonials
const slider2 = function() {
    const slides = document.querySelectorAll(".testimonials-slide");
    const btnNext = document.querySelector(".testimonials-btn");
    let curSlide = 0;
    const maxSlide = slides.length;
    // Functions
    const goToSlide = function(slide) {
        slides.forEach((s, i)=>{
            s.style.transform = `translateY(${100 * (i - slide)}%)`;
            s.classList.remove("section--hidden");
        });
    };
    // Next slide
    const nextSlide = function() {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;
        goToSlide(curSlide);
    };
    // Event Handler
    btnNext.addEventListener("click", nextSlide);
};
slider2();
// Reveal sections
const allSections = document.querySelectorAll(".section");
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});
allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
}); // Smooth scrolling
 // const btnScrollto = document.querySelector(".btn--scroll-to");
 // const doveSiamo = document.querySelector("#dove-siamo");
 // btnScrollto.addEventListener("click", function (e) {
 //   const dScoords = doveSiamo.getBoundingClientRect();
 // });
 // doveSiamo.scrollIntoView({ behavior: "smooth" });

//# sourceMappingURL=index.c4775257.js.map
