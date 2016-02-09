app.controller("travelController", ["$scope", function($scope){
	$scope.places=[
	{name:"Orlando & Keywest",photos:['/image/orlando1.pic.jpg','/image/orlando2.pic.jpg','/image/orlando3.pic.jpg','/image/orlando4.pic.jpg','/image/orlando5.pic.jpg']},
	{name:"Yosemite",photos:['/image/yosemite1.jpg','/image/yosemite2.jpg','/image/yosemite3.jpg','/image/yosemite4.jpg','/image/yosemite5.jpg','/image/yosemite6.pic.jpg']},
	{name:"Seoul", photos:['/image/seoul1.jpg','/image/seoul2.jpg','/image/seoul3.jpg','/image/seoul4.jpg']},
	{name:"Yellowstone National Park", more:"Here is the place I plan to visit...Hope I can get there in the recent days....",photos:['/image/yellowstone1.jpg','/image/yellowstone2.jpg','/image/yellowstone3.jpg']}
];
   $scope.getplace=null;
   $scope.getphoto=null;

   $("body").on("click",".photo" ,function(){
    $scope.getplace = $(this).attr('data-place');
    $scope.getphoto = $(this).attr('src');
    $("#shadow,#modal").fadeIn();
    $scope.$digest();

    });
   $('#shadow,.panel-heading,.closebtn').click(function(){
        	$("#shadow,#modal").fadeOut();
    });


}]);