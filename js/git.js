
$(document).ready(function(){ 
$('#home').hover(function() {
  $(this).attr('src', 'img/about-face-move.gif');
}, function() {
  $(this).attr('src', 'img/one.png');
});
});
