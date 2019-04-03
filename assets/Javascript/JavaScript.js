// Javascript for Food for Thought

$("#appetizers").click(function () {
    var type = "appetizers";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=1&offset=0&type=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    }).then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").append(tableRow);

        console.log(response.recipes);

    });
});

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
        $("#tableBuddy").append(tableRow);

        console.log(response.recipes);

    });
});

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
        $("#tableBuddy").append(tableRow);
        
        console.log(response.recipes);

    });
});

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
        $("#tableBuddy").append(tableRow);

        console.log(response.recipes);

    });
});

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
        $("#tableBuddy").append(tableRow);

        console.log(response.recipes);

    });
});

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
        $("#tableBuddy").append(tableRow);

        console.log(response.recipes);

    });
});
