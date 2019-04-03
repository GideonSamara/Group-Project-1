// Javascript for Food for Thought

var type = "breakfast";
var intolerances = "gluten"
var search = "eggs";
var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?intolerances=" + intolerances + "&number=10&offset=0&type=" + type + "&query=" + search + "&X-RapidAPI-Key=" + apiKey + "";

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {"X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d"}
}).then(function(response){
    console.log(response);

})