partid = '';
circles = ['race', 'gender'];

$(document).ready( function() {
  for (i = 0; i < circles.length; i++) {
    $('.container').append('<div class="draggable"><div class=title>'+ circles[i]+'</div></div>');
  }
    
    var $draggable =$('.draggable').draggabilly({
    containment: true
  });
});

function submit() {
    
    bootbox.alert('hello');
}
function getPartID() {
    bootbox.prompt({
        title: "Please enter participant ID:",
        value: partid,
        callback: function(result) {
            if (result == '') {
                getPartID();
            }
        }
    });
};