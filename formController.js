app.controller("formCtrl", ["$scope", '$firebaseArray','$timeout', function($scope,$firebaseArray,$timeout){
    var myDataRef = new Firebase('https://vvindividual.firebaseio.com/');
    $scope.messages = $firebaseArray(myDataRef);
    console.log($scope.messages);
    $scope.showUp = false;
    
    $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText,
      star: $scope.star
    });
        
    $scope.newMessageText = '';
    $scope.star = '';
    $scope.showUp = true;
    $timeout(function(){
        $scope.showUp = false;
    }, 3000);
        
  };
    
    
}]);