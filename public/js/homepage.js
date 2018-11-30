

$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
});


// $("#searchBtn").on("click", function(event) {
//   console.log("Submit was clicked");
//     var prescription = $("#search").val().trim();
//   var newSearch = $("#search").val().trim()+"&"+$("#zip").val().trim();

//   console.log(newSearch);

//   //var pName = document.getElementById("prescription-name");
//   //pName.innerHTML(newSearch.drugName);

//   $.get("/api/drugs/" + newSearch, function(data) {
//     var mName = document.getElementById("manufacturer-name");
//     var gName = document.getElementById("generic-name");
//     var descrip = document.getElementById("description");
//     var warns = document.getElementById("warnings");
//     var pRoute = document.getElementById("route");

//     console.log(data.openFDA.results[0]);

//     mNameResult = data.openFDA.results[0].openfda.manufacturer_name;
//     gNameResult = data.openFDA.results[0].openfda.generic_name;
//     descripResult = data.openFDA.results[0].description;
//     warnsResult = data.openFDA.results[0].boxed_warning;
//     pRouteResult = data.openFDA.results[0].openfda.route;

//     if (descripResult){
//         descrip.innerHTML = descripResult;
//     } else {
//         descrip.innerHTML = "Description: Not Available";
//     }

//     if (warnsResult){
//         warns.innerHTML = warnsResult;
//     } else {
//         warns.innerHTML = "Warnings: Not Available";
//     }

//     if (gNameResult){
//         gName.innerHTML = gNameResult;
//     } else {
//         gName.innerHTML = "Generic Name: Not Available";
//     }

//     if (mNameResult){
//         mName.innerHTML = mNameResult;
//     } else {
//         mName.innerHTML = "Manufacturer Name: Not Available";
//     }

//     if (pRouteResult){
//         pRoute.innerHTML = "Route: " + pRouteResult;
//     } else {
//         pRoute.innerHTML = "Route: Not Available";
//     }


//     $(".empty-list").empty();

//     for (let i = 0; i < 10; i++) {
//         $(".empty-list").append(
//           "<li><a href=" +
//             data.nyt.response.docs[i].web_url +
//             ">" +
//             data.nyt.response.docs[i].snippet +
//             "</a></li>"
//         );
//     }



//     d3.csv("prescription_data2.csv", function(error, data) {
//     let searchResult = 0;
//         for (var i = 0; i < data.length; i++) {
//           if (data[i].Prescription === "Botox") {
//             searchResult = i;
//           }
//         }

     
//     var data = [
//         {name: 'USMedicarePrice', count: data[searchResult].USMedicarePrice, color: '#000000'},
//         {name: 'Norway', count: data[searchResult].Norway, color: '#f8b70a'},
//         {name: 'England', count: data[searchResult].England, color: '#6149c6'},
//         {name: 'Ontario', count: data[searchResult].Ontario, color: '#9f8170'}
//       ];
//       var totalCount = 112;		//calcuting total manually
      
//       var width = 540,
//       height = 540,
//       radius = 200;
  
//           var arc = d3.arc()
//           .outerRadius(radius - 10)
//           .innerRadius(100);
  
//           var pie = d3.pie()
//           .sort(null)
//           .value(function(d) {
//               return d.count;
//           });
  
//           var svg = d3.select('body').append("svg")
//           .attr("width", width)
//           .attr("height", height)
//           .append("g")
//           .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
//       var g = svg.selectAll(".arc")
//         .data(pie(data))
//         .enter().append("g");    
  
//          g.append("path")
//           .attr("d", arc)
//         .style("fill", function(d,i) {
//             return d.data.color;
//         });
  
//       g.append("text")
//           .attr("transform", function(d) {
//           var _d = arc.centroid(d);
//           _d[0] *= 1.5;	//multiply by a constant factor
//           _d[1] *= 1.5;	//multiply by a constant factor
//           return "translate(" + _d + ")";
//         })
//         .attr("dy", ".50em")
//         .style("text-anchor", "middle")
//         .text(function(d) {
//           return d.data.count;
//         });
          
//       g.append("text")
//          .attr("text-anchor", "middle")
//            .attr('font-size', '4em')
//            .attr('y', 20)
//          .text(totalCount);

//         })(window.d3);







//     scroller();

//   });
// });



    
    
// function scroller() {
//   var scroll = $("div.scroll"); // Sets the div with a class of scroll as a variable

//   var height = scroll.height(); // Gets the height of the scroll div

//   var topAdj = -height - 30;
//   /* '-height' turns the height                   of the UL into a negative #,
//    * '- 50' subtracts an extra 50 pixels from the height of
//    * the div so that it moves the trail of the UL higher to
//    * the top of the div before the animation                ends
//    */

//   scroll.animate(
//     {
//       top: [topAdj, "linear"]
//     },
//     50000,
//     function() {
//       scroll.css("top", 250); //resets the top position of the Ul for the next cycle
//       scroller(); // Recalls the animation cycle to begin.
//     }
//   );
// }
