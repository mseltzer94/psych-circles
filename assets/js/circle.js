//array shuffle procedure from //http://www.kirupa.com/html5/shuffling_array_js.htm
Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

partid = '';
circles = [
    {"name":'Race', "question":"Enter a race: "},
    {"name":'Gender', "question":""}, 
    {"name":'Age', "question":""}];

circles.shuffle();
$(document).ready( function() {
  for (i = 0; i < circles.length; i++) {
    $('.container').append('<div class="draggable"><div class=title>'+ circles[i].name+'</div></div>');
  }
    
    var $draggable =$('.draggable').draggabilly({
    containment: true
  });
$('.draggable').on( 'dragEnd', 
              function( event, pointer ) {
    alert('hello');
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
