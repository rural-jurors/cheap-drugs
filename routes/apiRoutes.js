let request = require("request-promise")
var db = require("../models");
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

        let googlePlacesEndpoints = "https://maps.googleapis.com/maps/api/place/textsearch/json"
        let googleSearch = {
            'query': `pharmacy+in+${req.params.zipCode}`,
            'key': 'AIzaSyCCA0sUX96T-YLkyp-8drXHTMMLy10Lynw'
        }

        Promise.all([request.get({
                url: openFDAEndpoint,
                qs: openFDASearch
            }), request.get({
                url: nytEndpoint,
                qs: nytSearch
            }), request.get({
                url: googlePlacesEndpoints,
                qs: googleSearch
            })])
            .then(([openFDAResponse, nytResponse, googleResponse]) => {
                let obj = {
                    openFDA: JSON.parse(openFDAResponse),
                    nyt: JSON.parse(nytResponse),
                    google: JSON.parse(googleResponse)
                };
                res.json(obj);
            })
            .catch((openFDAError, nytError, googleError) => {
                res.json(openFDAError);
                res.json(nytError);
                res.json(googleError);
            });
    });

    // API POST Requests
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        console.log("The user signed up!");
        db.UserProfile.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                userPassword: req.body.userPassword,
                zipcode: req.body.zipcode
            })
            .then(() => res.redirect('/home'));
    });
};