// Javascript for Food for Thought

$("#appetizers").click(function () {
    var type = "appetizers";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").prepend(tableRow);

        console.log(response.recipes);

    });
});

$("#appetizers").click(function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=appetizers"

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;

        var foodImage = $("<img>");

        foodImage.attr("src", imageUrl);
        foodImage.attr("alt", "food image");

        $("#images").prepend(foodImage);       

    })
})

$("#breakfast").click(function () {
    var type = "breakfast";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").prepend(tableRow);

        console.log(response.recipes);

    });
});

$("#breakfast").click(function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=breakfast"

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;

        var foodImage = $("<img>");

        foodImage.attr("src", imageUrl);
        foodImage.attr("alt", "food image");

        $("#images").prepend(foodImage);       

    })
})

$("#brunch").click(function () {
    var type = "brunch";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {
        
        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").prepend(tableRow);
        
        console.log(response.recipes);

    });
});

$("#brunch").click(function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=brunch"

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;

        var foodImage = $("<img>");

        foodImage.attr("src", imageUrl);
        foodImage.attr("alt", "food image");

        $("#images").prepend(foodImage);       

    })
})

$("#lunch").click(function () {
    var type = "lunch";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").prepend(tableRow);

        console.log(response.recipes);

    });
});

$("#lunch").click(function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=lunch"

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;

        var foodImage = $("<img>");

        foodImage.attr("src", imageUrl);
        foodImage.attr("alt", "food image");

        $("#images").append(foodImage);       

    })
})

$("#dinner").click(function () {
    var type = "dinner";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").prepend(tableRow);

        console.log(response.recipes);

    });
});

$("#dinner").click(function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dinner"

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;

        var foodImage = $("<img>");

        foodImage.attr("src", imageUrl);
        foodImage.attr("alt", "food image");

        $("#images").prepend(foodImage);       

    })
})

$("#dessert").click(function () {
    var type = "dessert";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").prepend(tableRow);

        console.log(response.recipes);

    });
});

$("#dessert").click(function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=desserts"

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;

        var foodImage = $("<img>");

        foodImage.attr("src", imageUrl);
        foodImage.attr("alt", "food image");

        $("#images").prepend(foodImage);       

    })
})