# CheapDrugs

**CheapDrugs** serves as a hub for prescription information that is friendly to all users. The tools this site provides empowers the consumer to find pharmacies, affordable pricing, cost comparison, and relevant pharmaceutical news.

**All information displayed and stored will be testing data for the purpose of demoing the app. No real patient data will be used in the app during this project.**

## Tech Stack
### Front End
* HTML
* CSS
* JavaScript
* Materialize
* D3
* Familywize Pricing Widget

### Back End
* Sequelize
* NodeJS
* Express
* APIs 
  * Google Maps 
  * New York Times 
  * Open FDA

## Roles of Members
1. **Nathan**: D3 Visualization, Materialize
2. **Andrea**: Sequelize, Databases  
3. **Mihir**: APIs, Routes
4. **Jacob**: Authentication
5. **Team**: Features (News Feed, Map Display)

## MVP
* Allow users to sign into the website, have this information post to our database
* Allow users to search for a drug 
	* After the search, have the app display relevant drug information (drug description, warnings, route) 
* Be able to compare international drug prices 
* Display a table showing local price comparisons at pharmacies near the user 
* Have an information feed that displays relevant news articles about the searched drug 
* Display a map with pharmacies near the user 
* Deployed to Heroku with JAWSDB
  
## Nice To Haves
* A logged in session to track drug searches for the users
* Check multiple prescriptions for interactions (Wolters Kluwer API)
* Provide coupons or other available discounts
* Set alerts for when a prescription is ready for refill by email push notification 
* Generic vs. Brand name conventions
* An admin page displaying active users

###Link: http://cheapdrugs.herokuapp.com/

