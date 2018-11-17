let request = require("request")
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/drugs/:drugName&:zipCode", function (req, res) {
        let openFDAEndpoint = "https://api.fda.gov/drug/label.json";
        request.get({url: openFDAEndpoint, qs:{"search": `description:${req.params.drugName}`}}, function(err, response){
            res.json(JSON.parse(response.body));
        })
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        console.log("The user signed up!");
    });
};