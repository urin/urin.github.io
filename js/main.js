$(function() {
  $.balloon.defaults = $.extend(true, $.balloon.defaults, {
    classname: "balloon-defaults", minLifetime: 0
  });
  $("article a").balloon();
});
