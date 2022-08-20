"use strict";

(function() {

  const carouselSlide = qs(".carousel-slide");
  const carouselImages = qsa(".carousel-slide img")

  const prevBtn = qs(".prev-btn");
  const nextBtn = qs(".next-btn");

  let count = 1;
  const size = carouselImages[0].clientWidth;

  function init() {
    loadCarousel();
    nextBtn.addEventListener("click", carouselBtns);
  }

  /** */
  function loadCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
  }

  function carouselBtns() {
    carouselSlide.classList.add("carousel-style");
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

})();