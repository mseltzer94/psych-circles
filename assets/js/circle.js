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

angular.module('psychCircles', ['draggabilly'])
  .controller('CircleController', ['$scope',
    function($scope, ModalService) {
$scope.partID;
$scope.circles = [
    {"name":'Race', "question":"Enter a race: "},
    {"name":'Gender', "question":""}, 
    {"name":'Age', "question":""}];
$scope.circles.shuffle();
$scope.getPartID = function() {
    bootbox.prompt({
        title: "Please enter participant ID:",
        value: $scope.partID,
        callback: function(result) {
            if (result == '') {
                $scope.getPartID();
            }
        }
    });
};
$scope.prompt = function(idx) {
    if ($scope.circles[idx].question != ''){
        bootbox.prompt({
        title: $scope.circles[idx].question,
        value: $scope.circles[idx].questionresp,
        callback: function(result) {
            $scope.circles[idx].questionresp = result;
            console.log($scope.circles);
        }
    }); 
    }
    console.log($('.draggable')[idx]);
    console.log($('.draggable')[idx].style.left);
    $scope.circles[idx].left = $('.draggable')[idx].style.left;
     $scope.circles[idx].top = $('.draggable')[idx].style.top;
    console.log($scope.circles);
    
}
        
// INIT
$scope.getPartID();


        
    }]);



function submit() {
    
    bootbox.alert('Submit data...');
}

