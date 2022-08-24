"use strict";

(function() {

  //FIRST CAROUSEL
  const carouselSlide1 = qs('.carousel-slide1');
  const carouselImages1 = qsa('.carousel-slide1 img');

  //Buttons
  const previousBtn1 = qs("#prevBtn1");
  const nextBtn1 = qs("#nextBtn1");

  //Counter
  let counter1 = 1;
  const size1 = carouselImages1[0].clientWidth;

  //SECOND CAROUSEL
  const carouselSlide2 = qs(".carousel-slide2");
  const carouselImages2 = qsa(".carousel-slide2 img");

  //Buttons
  const previousBtn2 = qs("#prevBtn2");
  const nextBtn2 = qs("#nextBtn2");

  //Counter
  let counter2 = 1;
  const size2 = carouselImages2[0].clientWidth;

  window.addEventListener("load", init);

  function init() {
    loadCarousel1();
    nextBtn1.addEventListener("click", nextButton1);
    previousBtn1.addEventListener("click", previousButton1);

    loadCarousel2();
    nextBtn2.addEventListener("click", nextButton2);
    previousBtn2.addEventListener("click", previousButton2);
  }

  function loadCarousel1() {
    carouselSlide1.style.transform = 'translateX(' + (-size1*counter1) + 'px)';

    carouselSlide1.addEventListener('transitionend',()=>{
      if(carouselImages1[counter1].id === 'lastClone1') {
        carouselSlide1.style.transition = 'none';
        counter1 = carouselImages1.length -2;
        carouselSlide1.style.transform = 'translateX(' + (-size1*counter1) + 'px)';
      }
      if(carouselImages1[counter1].id === 'firstClone1') {
        carouselSlide1.style.transition = 'none';
        counter1 = carouselImages1.length - counter1;
        carouselSlide1.style.transform = 'translateX(' + (-size1*counter1) + 'px)';
      }
    });
  }

  function loadCarousel2() {
    carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';

    carouselSlide2.addEventListener('transitionend', ()=>{
      if(carouselImages2[counter2].id === 'lastClone2') {
        carouselSlide2.style.transition = 'none';
        counter2 = carouselImages2.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';
      }
      if(carouselImages2[counter2].id === 'firstClone2') {
        carouselSlide2.style.transition = 'none';
        counter2 = carouselImages2.length - counter2;
        carouselSlide2.style.transform = 'translateX(' + (-size2*counter2) + 'px)';
      }
    });
  }

  function nextButton1() {
    if(counter1 >= carouselImages1.length - 1) return;

    carouselSlide1.style.transition = 'transform 0.5s ease-in-out';
    counter1++;
    carouselSlide1.style.transform = 'translateX(' + (-size1*counter1) + 'px)';
  }

  function previousButton1() {
    if(counter1 <= 0) return;

    carouselSlide1.style.transition = 'transform 0.5s ease-in-out';
    counter1--;
    carouselSlide1.style.transform = 'translateX(' + (-size1*counter1) + 'px)';
  }

  function nextButton2() {
    if(counter2 >= carouselImages2.length - 1) return;

    carouselSlide2.style.transition = 'transform 0.5s ease-in-out';
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2*counter2)
      + 'px)';
  }

  function previousButton2() {
    if(counter2 <= 0) return;

    carouselSlide2.style.transition = 'transform 0.5s ease-in-out';
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2*counter2)
      + 'px)';
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