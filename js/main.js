$(function() {
  $.balloon.defaults = $.extend(true, $.balloon.defaults, {
    classname: "balloon-defaults", minLifetime: 0, tipSize: 8
  });
  $("header a").balloon({ position: "bottom" });
  $("article, footer").find("[title]").balloon();
  $("#jquery-version").html(" version " + $.fn.jquery);
});
