circles = ['race', 'gender'];

$(document).ready( function() {
  for (i = 0; i < circles.length; i++) {
    $('.container').append('<div class="draggable"><div class=title>'+ circles[i]+'</div></div>');
  }
    
    var $draggable =$('.draggable').draggabilly({
    containment: true
  });
});