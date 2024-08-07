var tl = new TimelineMax({onUpdate:updateSlider})
tl.from(".logo", 0.5, {opacity:0, x:100, ease:Elastic.easeOut}, 0.5)
  .from("h1", 0.5, {x:100, opacity:0, ease:Elastic.easeOut})
  .staggerFrom(".site", 0.4, {opacity:0,  scale:0.6, ease:Back.easeOut}, 0.1)
  .staggerFrom(".award-info", 0.2, {opacity:0,  y:30}, 0.1, "-=0.5")
  //.to(".logo, h1, .site", 0.5, {opacity:0, delay:5});

//--- SLIDER ---
var $slider = $("#slider");
$slider.slider({
  range: false,
  min: 0,
  max: 1,
  step: 0.002,
  value:0,
  slide: function ( event, ui ) {
    tl.progress( ui.value ).pause();
  }
});
function updateSlider() {
	$slider.slider("value", tl.progress());
}
var $replayIcon = $("#replayIcon"),
    $replay = $("#replay").mouseenter(function(){
      TweenLite.to($replayIcon, 0.4, {rotation:"+=360"});
      TweenLite.to($replay, 0.4, {opacity:1});
    }).mouseleave(function(){
      TweenLite.to($replay, 0.4, {opacity:0.65});
    }).click(function(){
      tl.restart();
});
