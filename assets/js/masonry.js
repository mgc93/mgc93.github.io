$(document).ready(function () {
  // Init Masonry
  var $grid = $(".grid").masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: ".grid-item",
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });

  // Re-layout after fonts finish loading to avoid clipped text on first visit
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      $grid.masonry("layout");
    });
  }

  // Fallback: ensure layout once all assets are loaded
  $(window).on("load", function () {
    $grid.masonry("layout");
  });
});
