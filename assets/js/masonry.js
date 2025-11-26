$(document).ready(function () {
  // Init Masonry
  var $grid = $(".grid").masonry({
    gutter: 10,
    horizontalOrder: true,
    columnWidth: ".grid-sizer",
    percentPosition: true,
    itemSelector: ".grid-item",
  });

  var frameQueued = false;
  var requestRelayout = function () {
    if (frameQueued) return;
    frameQueued = true;
    requestAnimationFrame(function () {
      frameQueued = false;
      $grid.masonry("layout");
    });
  };
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    requestRelayout();
  });

  // Re-layout after fonts finish loading to avoid clipped text on first visit
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      requestRelayout();
    });
  }

  // Fallback: ensure layout once all assets are loaded
  $(window).on("load", function () {
    requestRelayout();
  });

  // Final guard: trigger a relayout shortly after load for any late shifts
  setTimeout(function () {
    requestRelayout();
  }, 300);

  // Re-layout when grid items change size (e.g., after fonts swap)
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function () {
      requestRelayout();
    });

    $grid.find(".grid-item").each(function (_index, item) {
      ro.observe(item);
    });
  }
});
