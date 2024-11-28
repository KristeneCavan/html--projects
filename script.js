const sliderTabs = document.querySelectorAll(".slider-tab");

const swiper = new Swiper('.slider-container', {
    effect: "slide",
    speed: 1300,
});

sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
    });
});
