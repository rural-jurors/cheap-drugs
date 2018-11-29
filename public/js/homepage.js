$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
});

$("#searchBtn").on("click", function(event) {
  console.log("Submit was clicked");
  var newSearch = $("#search").val().trim()+"&"+$("#zip").val().trim();

  console.log(newSearch);

  //var pName = document.getElementById("prescription-name");
  //pName.innerHTML(newSearch.drugName);

  $.get("/api/drugs/" + newSearch, function(data) {
    var mName = document.getElementById("manufacturer-name");
    var gName = document.getElementById("generic-name");
    var descrip = document.getElementById("description");
    var warns = document.getElementById("warnings");
    var pRoute = document.getElementById("route");

    console.log(data);

    descrip.innerHTML = data.openFDA.results[0].description;
    warns.innerHTML = data.openFDA.results[0].boxed_warnings;
    gName.innerHTML = data.openFDA.results[0].generic_name;
    mName.innerHTML = data.openFDA.results[0].manufacturer_name;
    pRoute.innerHTML = data.openFDA.results[0].route;

    $(".empty-list").empty();

    for (let i = 0; i < 10; i++) {
        $(".empty-list").append(
          "<li><a href=" +
            data.nyt.response.docs[i].web_url +
            ">" +
            data.nyt.response.docs[i].snippet +
            "</a></li>"
        );
    }

    scroller();

  });
});



    
    
function scroller() {
  var scroll = $("div.scroll"); // Sets the div with a class of scroll as a variable

  var height = scroll.height(); // Gets the height of the scroll div

  var topAdj = -height - 30;
  /* '-height' turns the height                   of the UL into a negative #,
   * '- 50' subtracts an extra 50 pixels from the height of
   * the div so that it moves the trail of the UL higher to
   * the top of the div before the animation                ends
   */

  scroll.animate(
    {
      top: [topAdj, "linear"]
    },
    50000,
    function() {
      scroll.css("top", 250); //resets the top position of the Ul for the next cycle
      scroller(); // Recalls the animation cycle to begin.
    }
  );
}
