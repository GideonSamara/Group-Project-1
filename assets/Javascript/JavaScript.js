$("#Log-In").click(function() {
    alert("NICE TO SEE YOU!");
})

$("#Sign-Up").click(function() {
    alert("WELCOME!");
})

$("#appetizers").click(function () {
    var type = "appetizers";
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=" + type + "";

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "4d2069666cmsh137817c641aa7c6p19c444jsnf018975a587d" }
    })
    
    .then(function (response) {

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
    })

    .then(function (response) {

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
    })

    .then(function (response) {
        
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
    })
    
    .then(function (response) {

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
    })
    
    .then(function (response) {

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
    })
    
    .then(function (response) {

        var tableRow = $('<tr>');
        var name = $('<td>').text(response.recipes[0].title);
        var recipe = $('<td>').text(response.recipes[0].instructions);
        tableRow.append(name, recipe);
        $("#tableBuddy").append(tableRow);

        console.log(response.recipes);

    });

});

// $(document).ready(function() {

//     $("#Log-In").click(function() {
//         alert("Button Clicked");
//     })

//     $("#Sign-Up").click(function() {
//         alert("Button Clicked");
//     })

//     $("#appetizers").click(function() {
//         alert("let's get cookin'");
//     })

//     $("#breakfast").click(function() {
//         alert("most important meal of the day!");
//     })

//     $("#brunch").click(function() {
//         alert("quick bite!");
//     })

//     $("#lunch").click(function() {
//         alert("Eat your heart out!");
//     })

//     $("#dinner").click(function() {
//         alert("Ready to feast?");
//     })

//     $("#dessert").click(function() {
//         alert("Indulge!");
//     })

//     $('.container2').click(function(e){
//         console.log(e.target.id);
//         switch(e.target.id) {
//             case "appetizers":
//                 getAppetizers();
//             break;
//             case "breakfast" :
//                 getBreakfast();
//             break;
//             case "brunch":
//                 getBrunch();
//             break;
//             case "lunch":
//                 getLunch();
//             break;
//             case "dinner":
//                 getDinner();
//             break;
//             case "dessert":
//                 getDessert();
//             break;
//         }
//     })

//     function getAppetizers() {
//         console.log("getAppetizers");
//     }

//     function getBreakfast() {
//       console.log("getBreakfast");
//     }

//     function getBrunch() {
//         console.log("getBrunch");
//     }

//     function getLunch() {
//         console.log("getLunch");
//     }

//     function getDinner() {
//         console.log("getDinner");
//     }

//     function getDessert() {
//         console.log("getDessert");
//     }

// });


