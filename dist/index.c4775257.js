// Sticky menu background
window.addEventListener("scroll", function() {
    if (window.scrollY > 80) document.querySelector("#main-navbar").style.opacity = 0.9;
    else document.querySelector("#main-navbar").style.opacity = 1;
});
// Menu hidden
const menu = document.querySelector(".menu");
const menuLines = document.querySelector(".menu-lines");
const hideMenuX = document.querySelector(".x");
const logo = document.querySelector(".logo");
const overlay = document.querySelector(".overlay");
const header1 = document.querySelector(".welcome");
const headerText = document.querySelector(".header__text");
const openMenu = function() {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeMenu = function() {
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
};
menuLines.addEventListener("click", openMenu);
hideMenuX.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
// Slider
const slider = function() {
    const slides = document.querySelectorAll(".photo-container");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    let curSlide = 0;
    const maxSlide = slides.length;
    // Functions
    const goToSlide = function(slide) {
        slides.forEach((s, i)=>s.style.transform = `translateX(${200 * (i - slide)}%)`);
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
};
slider();
// Smooth scrolling
// const btnScrollto = document.querySelector(".btn--scroll-to");
// const doveSiamo = document.querySelector("#dove-siamo");
// btnScrollto.addEventListener("click", function (e) {
//   const dScoords = doveSiamo.getBoundingClientRect();
// });
// doveSiamo.scrollIntoView({ behavior: "smooth" });
// Menu-lines Hover effect
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
menuLines.addEventListener("mouseenter", function() {
    line2.style.transform = `translateY(-12px)`;
    line2.style.width = "60px";
});
menuLines.addEventListener("mouseleave", function() {
    line2.style.transition = "1s";
    line2.style.transform = `translateY(0)`;
    line2.style.width = "40px";
});
///////////////////////////////////////
// Sticky navigation: Intersection Observer API
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(sectionA);
///////////////////////////////////////
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
});

//# sourceMappingURL=index.c4775257.js.map
