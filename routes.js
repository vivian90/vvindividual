app.config(function($routeProvider){
	$routeProvider.when('/background',{
		templateUrl:'/background.html'
	})
	.when('/skills',{
		templateUrl:'/skills.html'
	})
	.when('/food',{
		templateUrl:'/food.html'
	})
	.when('/travel',{
		templateUrl:'/travel.html'
	})
    .when('/detail',{
        templateUrl:'/details.html'
    })
	.when('/',{
		templateUrl:'default.html'
	})
	.otherwise({redirectTo:'/'});
});