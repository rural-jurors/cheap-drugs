/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
/* function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = {
        "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': "pharmaceutical drug costs"
    };

    console.log(queryURL);

    return queryURL + $.param(queryParams);
    
}


function updatePage(NYTData) {
    // Get from the form the number of results to display
    // API doesn't have a "limit" parameter, so we have to do this ourselves
    var numArticles = 5;

    // Log the NYTData to console, where it will show up as an object
    console.log(NYTData);

    // Loop through and build elements for the defined number of articles
    for (var i = 0; i < numArticles; i++) {
        // Get specific article info for current index
        console.log("begin loop");
        var article = NYTData.response.docs[i];

        // Increase the articleCount (track article # - starting at 1)
        var articleCount = i + 1;

        // Create the  list group to contain the articles and add the article content for each
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");

        // Add the newly created element to the DOM
        $("#article-section").append($articleList);

        // If the article has a headline, log and append to $articleList
        var headline = article.headline;
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");

        if (headline && headline.main) {
            console.log(headline.main);
            $articleListItem.append(
                "<span class='label label-primary'>" +
                articleCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
        }

        // If the article has a byline, log and append to $articleList
        var byline = article.byline;

        if (byline && byline.original) {
            console.log(byline.original);
            $articleListItem.append("<h5>" + byline.original + "</h5>");
        }

        // Log section, and append to document if exists
        var section = article.section_name;
        console.log(article.section_name);
        if (section) {
            $articleListItem.append("<h5>Section: " + section + "</h5>");
        }

        // Log published date, and append to document if exists
        var pubDate = article.pub_date;
        console.log(article.pub_date);
        if (pubDate) {
            $articleListItem.append("<h5>" + article.pub_date + "</h5>");
        }

        // Append and log url
        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);

        // Append the article
        $articleList.append($articleListItem);
    }

    $("ul.list-group").liScroll();
}


    jQuery.fn.liScroll = function (settings) {
        settings = jQuery.extend({
            travelocity: 0.03
        }, settings);
        return this.each(function () {
            var $strip = jQuery(this);
            $strip.addClass("newsticker")
            var stripHeight = 1;
            $strip.find("li").each(function (i) {
                stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
            });
            var $mask = $strip.wrap("<div class='mask'></div>");
            var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
            var containerHeight = $strip.parent().parent().height(); //a.k.a. 'mask' width 	
            $strip.height(stripHeight);
            var totalTravel = stripHeight;
            var defTiming = totalTravel / settings.travelocity; // thanks to Scott Waye		
            function scrollnews(spazio, tempo) {
                $strip.animate({
                    top: '-=' + spazio
                }, tempo, "linear", function () {
                    $strip.css("top", containerHeight);
                    scrollnews(totalTravel, defTiming);
                });
            }
            scrollnews(totalTravel, defTiming);
            $strip.hover(function () {
                    jQuery(this).stop();
                },
                function () {
                    var offset = jQuery(this).offset();
                    var residualSpace = offset.top + stripHeight;
                    var residualTime = residualSpace / settings.travelocity;
                    scrollnews(residualSpace, residualTime);
                });
        });
    };



// Build the query URL for the ajax request to the NYT API
var queryURL = buildQueryURL();

// Make the AJAX request to the API - GETs the JSON data at the queryURL.
// The data then gets passed as an argument to the updatePage function
$.ajax({
  url: queryURL,
  method: "GET"
}).then(updatePage); */

/* $(function () {
    console.log("started liscroll");
    $("ul.list-group").liScroll();
}); */

$(".empty-list").empty();
searchTerm = "pharmaceutical drug costs";
console.log(searchTerm);
numRecords = 10;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url +=
  "?" +
  $.param({
    "api-key": "bd0477f20cd244eea6a7564838882bda",
    q: `${searchTerm}`,
    page: `${numRecords}`
  });
$.ajax({
  url: url,
  method: "GET"
})
  .done(function(result) {
    console.log(result);
    for (let i = 0; i < numRecords; i++) {
      $(".empty-list").append(
        "<li><a href=" +
          result.response.docs[i].web_url +
          ">" +
          result.response.docs[i].snippet +
          "</a></li>"
      );
    }
    scroller();
  }
)
  .fail(function(err) {
    throw err;
  });

//$("ul.empty-list").liScroll();



    function scroller() {
        
      var scroll = $('div.scroll');// Sets the div with a class of scroll as a variable
      
      var height = scroll.height(); // Gets the height of the scroll div
      
      var topAdj = -height-30; /* '-height' turns the height                   of the UL into a negative #, 
                   * '- 50' subtracts an extra 50 pixels from the height of 
                         * the div so that it moves the trail of the UL higher to 
                                 * the top of the div before the animation                ends
                                 */
        
        scroll.animate({
            'top' : [topAdj, 'linear'] 
        }, 50000, function(){
            scroll.css('top', 250); //resets the top position of the Ul for the next cycle
            scroller(); // Recalls the animation cycle to begin.
        });}
        
