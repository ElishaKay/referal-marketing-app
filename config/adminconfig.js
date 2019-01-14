//If  you make any changes to schemeBeam, make sure you NEVER reference this config file on the front end of your code.

module.exports = {
  //Port on which to deploy app.js
  "port": process.env.PORT || 80,
  //Your personal SendGrid API key. 
  "SENDGRID_API_KEY": process.env.SEND_GRID_KEY,
  //The id of the list you would like your client emails to (a number, can be found at the end the url path of your list)
  "list_Id": 76,
  //Mysql configuration
  "mysql": {
    "host": process.env.HOST,
    "schema": "schemeBeam",
    "username": process.env.USER,
    "password": process.env.PASSWORD
  },
  //Make absolutely sure you change these values before you start your campaign. Used to log into admin UI and gain access to certain API endpoints.
  "admin": {
  	"username": process.env.SBADMIN,
  	"password": process.env.SBPASSWORD
  },
  //secret for authentication process. change to whatever you'd like.
  "passportSecret": "schemeBeamSecret"
}