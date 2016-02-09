app.controller("foodController", ["$scope", function($scope){
  
$scope.foods=[
  {name:"MAPO TOFU",image:"/image/mapo tofu.jpg",material:["garlic", "minced ginger", "green onions","black beans", "Sichuan peppercorns", "ground pork", "doubanjiang (chili bean paste)", "silken tofu"],recipe:"http://www.pbs.org/food/recipes/mapo-tofu/"},
  {name:"STEWED BEEF",image:"/image/beef.jpg",material:["sirloin steak", "garlic cloves", "tomato paste", "red potato", "carrot", "red wine", "thyme", "pearl onions", "crushed tomatoes", "rosemary sprig"],recipe:"http://www.myrecipes.com/recipe/hearty-beef-tomato-stew"},
  {name:"COKE CHICKEN WINGS",image:"/image/coke chicken wing.jpg",material:["chicken wings", "cola", "green onion", "ginger","cooking wine"," soy sauce"],recipe:"http://www.travelchinaguide.com/tour/food/chinese-cooking/cocacola-chicken-wings.htm"},
  {name:"PORK RIB SOUP",image:"/image/rib soup.jpg",material:["ginger", "sea salt","pork spareribs", "aikon radish","fresh cilantro (optional) or green onion"],recipe:"http://www.food.com/recipe/paigu-luobo-tang-chinese-pork-rib-and-daikon-soup-465071"}
  ];
}]);