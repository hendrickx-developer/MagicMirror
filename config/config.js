/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: 
			{
				clockBold: true,
				showSunTimes: true,
				timezone: "IE|Europe/Dublin"
			}
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				showLocation: true,
				colored: true,
				coloredSymbolOnly: true,
				calendars: 
				[
/*					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					},
*/
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/en.irish%23holiday%40group.v.calendar.google.com/public/basic.ics"					},
					{
						symbol: "houzz",
						url: "https://calendar.google.com/calendar/ical/the.hendrickx.family%40gmail.com/private-294205b408efa2c21aef84bedbd13207/basic.ics"
											}					
						
				]
			}
		},	
        {
			module: "helloworld",
			position: "bottom_bar",
			config: {
			  text: ["Hendrickx family"]
			}
		},

		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Dublin, Ireland",
				locationID: "2964574", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "e67d14d9b43cd93e5b58fd81f3449298"
				//home.openweathermap.org/api_keys
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Dublin, Ireland",
				locationID: "2964574", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "e67d14d9b43cd93e5b58fd81f3449298"
			}
		},
		{
			module: "newsfeed",
			position: "top_bar",
			config: {
				feeds: [
/*					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
*/
					{
						title: "BBC News - World",
						url: "http://feeds.bbci.co.uk/news/world/rss.xml"
					},
					{
						title: "BBC Sport",
						url: "http://feeds.bbci.co.uk/sport/rss.xml"
					},
										{
						title: "The Economist - Science & Technology",
						url: "https://www.economist.com/science-and-technology/rss.xml"
					},
					{
						title: "Irish Independent - Breaking News",
						url: "https://www.independent.ie/breaking-news/rss/"
					},
					{
						title: "Irish Independent - European news",
						url: "https://www.independent.ie/world-news/europe/rss/"
					},
					{
						title: "The Economist - Finance and Economics",
						url: "https://www.economist.com/finance-and-economics/rss.xml"
					}
					
					
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
