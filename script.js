const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelectorAll(".slider-indicator");

const updatePagination = (tab, index) => {
    sliderIndicator.style.transform = 'translateX(${tab.offsetLeft - 20}px)';
}
const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
});

sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updatePagination(tab, index);
    });
});
