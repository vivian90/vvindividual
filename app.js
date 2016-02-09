var app = angular.module('myApp',['ngRoute','firebase']);

$('.menu').click(
	function(event){
     event.preventDefault();
	});

$("nav li").click(
	function(){
		$('.active').removeClass('active');
		$(this).addClass('active');

	});

$("#backTop").on("click", function(e){
	e.preventDefault();
	$("body").animate({'scrollTop':0}, '600');
});



$(document).scroll(function(){
	var position= 500;
	var backBtn= $('#backTop');
	var pos = $(window).scrollTop();

	if(pos>= position){
		backBtn.fadeIn(300);
	}else{
		backBtn.fadeOut(300);
	}

	});

