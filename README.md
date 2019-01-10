# schemeBeam

#### Do you want your product to go viral *and* build an email list of solid leads to market to directly? Do it for free with schemeBeam, the open source referral marketing application! 

schemeBeam provides a solution for you to gain hype around your idea. A simple landing page (which you can modify) asks users for their email address. After they verify, they can share their invite link in exchange for the ability to earn a reward. Users win by getting the biggest number of users to sign up (tracked by schemeBeam).

The more users they refer, the higher they move up in the queue, and the more free traffic you gain.


## How It Works

1. Decide on a reward to give away, and the number of top performers you'll be rewarding it to. Maybe beta access to your new application for the top 50 referrers, or a free month of your subscription service to the top 10.
2. Let people know about the offer. Link them to your schemeBeam landing page, where they can submit their email to enter the contest.
3. Once they enter, an email will be sent to them containing their personal referral link. They'll be asked to confirm their email address in order to participate, ensuring that you're receiving real leads for your product or service.
4. Once they confirm their email address, they'll be encouraged to share their referral link on social media and elsewhere, continuing the cycle. Every person that signs up through their link will increase the referrer's standing in the contest. Data about their rank will be accessible to them via the stats page.
5. When the campaign is finished, you'll have a list of potential customers that will automatically be added to your SendGrid contacts list, in addition to being downloadable as a CSV file via the admin panel.


![schemeBeam](http://i.imgur.com/yB3glO2.gif)


## Installation and Setup

1. Spin up a MySQL server (requires version 5.6.5 or greater) and create a new database named "schemeBeam"
2. In the command prompt, enter `mysql -u [your username] -p schemeBeam < schemeBeamDB.sql` to import the database structure
3. Run `npm install`
4. Create a [SendGrid](https://www.sendgrid.com) account. The first 12,000 emails sent are absolutely free. Go to the settings tab and click on "API Keys". Create a general API key and paste it into adminConfig.js (remember to use the actual API key and not the API key ID, happens to everyone)
5. Create a list for your collected emails under "Marketing Campaigns" in SendGrid. Add the ID of your list to the adminConfig file (while very useful, this is technically optional. You can download a CSV of your email list in the admin panel)
6. Finish changing your credentials in adminconfig.js, and customize your app settings in settingsconfig.js. Run `webpack` to finalize changes.
7. Change the background image in the CSS file to fit your company's branding
8. Ready to deploy, run app.js


<h3>Routes / API's</h3>

You're verified:
http://localhost/#/verify/c5cdaa9460eff1e60392b015d8abb280

"Your Rank is #3" + Social Share Buttons:
http://localhost/#/stats/9cfdd49ee17179ffe840739c388e2e97



<h3>Admin Routes</h3>

http://localhost/#/login


<h3>Your .env file</h3>

export SEND_GRID_KEY=xyz
export DATABASE=xyz
export HOST=xyz
export PASSWORD=xyz
export USER=xyz
export SBADMIN=xyz
export SBPASSWORD=xyz

## License

The code, documentation and configuration are released under
the MIT license.
