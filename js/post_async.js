//------------------------------------------------------------------------------
// Feedly button
//------------------------------------------------------------------------------
$(function() {
  var q = ('http://query.yahooapis.com/v1/public/yql?q='
    + encodeURIComponent(
      'select * from json where url="'
      + 'http://cloud.feedly.com/v3/feeds/feed%2F'
      + encodeURIComponent('{{ site.production_url }}/rss.xml')
      + '"'
    ) + '&format=json&callback=?'
  );
  $.getJSON(q, function(data) {
    var c = data.query.results;
console.log(data);
    $(".fi-count").text(c ? c.json["subscribers"] : "?");
  });
});

//------------------------------------------------------------------------------
// Facebook button
//------------------------------------------------------------------------------
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName("div")[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//------------------------------------------------------------------------------
// Pocket button
//------------------------------------------------------------------------------
!function(d,i){
  if(!d.getElementById(i)){
    var j=d.createElement("script");
    j.id=i;
    j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";
    var w=d.getElementById(i);
    d.body.appendChild(j);
  }
}(document,"pocket-btn-js");

//------------------------------------------------------------------------------
// Twitter button
//------------------------------------------------------------------------------
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){
    js=d.createElement(s); js.id=id; js.src=p+'://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document, 'script', 'twitter-wjs');

//------------------------------------------------------------------------------
// Google +1 button
//------------------------------------------------------------------------------
window.___gcfg = {lang: 'ja'};
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

