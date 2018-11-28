$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();

    $(".submit").on("click", function(event) { 
        var newSearch = {
            prescription: $("#search").val().trim(),
            zip: parseInt($("#zip").val().trim())
        };
        $.get("/api/drugs", newSearch, function(data){
            var results = document.getElementById("results");
            results.appendChild("<p> Description: "+data.openFDA.results.description+"</p>");
            results.appendChild("<p> Warnings: "+data.openFDA.results.boxed_warnings+"</p>");
            results.appendChild("<p> Generic Name: "+data.openFDA.results.generic_name+"</p>");
            results.appendChild("<p> Manufacturer Name: "+data.openFDA.results.manufacturer_name+"</p>");
            results.appendChild("<p> Route: "+data.openFDA.results.route+"</p>");
        })
    
    });
});
