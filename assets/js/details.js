$(function() {
    $("a.review-btn").click(() => {
      $([document.documentElement]).animate({
        scrollTop: $("#customer-reviews").offset().top
    }, 1200);
    });
});