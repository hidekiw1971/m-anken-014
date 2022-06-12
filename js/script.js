jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
