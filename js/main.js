const modalButtons = document.querySelectorAll("[data-modal-button]");
const allModals = document.querySelectorAll("[data-modal]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const fadeClick = document.querySelectorAll(".modal-window");

//Бургер навигация

const openBur = document.querySelector("#open-menu");
const burger = document.querySelector(".menu-btn");
const closeBurg = document.querySelector("#close-butt");
const linkBur = document.querySelectorAll("#link-bur");

linkBur.forEach(function (item) {
  item.addEventListener("click", function () {
    burger.classList.add("hidden");
  });
});

openBur.addEventListener("click", function () {
  burger.classList.remove("hidden");
});

closeBurg.addEventListener("click", function () {
  burger.classList.add("hidden");
});

// Модальное окно для просмотра времени
const timeBtn = document.querySelector("[data-time-btn]");
const timeModal = document.querySelector("[data-modal-time]");
const timeCloseBtn = document.querySelector("[data-close-time ]");

timeBtn.addEventListener("click", function () {
  timeModal.classList.remove("hidden");
});

timeCloseBtn.addEventListener("click", function () {
  timeModal.classList.add("hidden");
});

timeModal.addEventListener("click", function () {
  timeModal.classList.add("hidden");
});

// Слайдер
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    freeMode: true, // Включить свободный режим перемещения слайдов
    freeModeMomentum: true, // Включить инерцию для свободного перемещения
    freeModeMomentumVelocityRatio: 0.2, // Коэффициент скорости инерции
    loop: true,
    spaceBetween: 20, // Бесконечный цикл
  });
});

// Скрипты для модальных окон
modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modalId = this.dataset.modalButton;

    const modal = document.querySelector("#" + modalId);
    modal.classList.remove("hidden");
  });
});

allModals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});

modalCloseButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const closeModal = this.closest("[data-modal]");

    closeModal.classList.add("hidden");
  });
});

fadeClick.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// Скрипт для плавной прокрутке при перемещений
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
});
