$(function() {
  $.balloon.defaults = $.extend(true, $.balloon.defaults, {
    classname: "balloon-defaults", minLifetime: 0, tipSize: 8
  });
  $(".sns-icons a").balloon({ position: "bottom" });
  $(".post, footer").find("[title]").balloon();
  $("#jquery-version").text(" version " + $.fn.jquery);
});
