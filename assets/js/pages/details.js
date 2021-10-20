$(function() {
  //selector to find selectable element
  $(".image-overlay-thumbnail").click(function() {
    const selector = $(this).find("img");
    $("#image-container").attr("src", selector.attr("src"));
    $("#lightbox-overlay").find("img").attr("src", selector.attr("src"));

    $(".image-overlay-thumbnail").find("img").removeClass("border-2x border-theme-primary").addClass("border");
    selector.addClass("border-2x border-theme-primary").removeClass("border");
  });

  // scroll to position based on specific element id
  $("a.review-btn").click(function() {
    $([document.documentElement]).animate({
      scrollTop: $("#customer-reviews").offset().top
    }, 2000);
  });
});