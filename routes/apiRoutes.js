let request = require("request-promise")
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    app.get("/api/drugs/:drugName&:zipCode", function (req, res) {
        let openFDAEndpoint = "https://api.fda.gov/drug/label.json";
        let openFDASearch = {
            "search": `description:${req.params.drugName}`
        }
        let nytEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        let nytSearch = {
            'api-key': "97b8ee4143194df68c8a1637095f6e03",
            'q': req.params.drugName,
            'sort': "newest"
        };

        Promise.all([request.get({
                url: openFDAEndpoint,
                qs: openFDASearch
            }), request.get({
                url: nytEndpoint,
                qs: nytSearch
            })])
            .then(([openFDAResponse, nytResponse]) => {
                let obj = {
                    openFDA: JSON.parse(openFDAResponse),
                    nyt: JSON.parse(nytResponse)
                };
                res.json(obj);
            });
    });

    // API POST Requests
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        console.log("The user signed up!");
    });
};