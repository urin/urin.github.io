//------------------------------------------------------------------------------
// Google Universal Analytics
//------------------------------------------------------------------------------
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-37966978-1', 'urin.github.io');
ga('send', 'pageview');

//------------------------------------------------------------------------------
// Feedly button
//------------------------------------------------------------------------------
$(function() {
  var q = ('http://query.yahooapis.com/v1/public/yql?q='
    + encodeURIComponent(
      'select * from json where url="'
      + 'http://cloud.feedly.com/v3/feeds/feed%2F'
      + encodeURIComponent('{{ site.production_url }}/rss.xml')
      + '"')
    + '&format=json&callback=?'
  );
  $.getJSON(q, function(data) {
console.log(data);
    $(".fi-count").text(data.query.results.json["subscribers"]);
  });
});

