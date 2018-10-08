const request = require('request');
const cheerio = require('cheerio');

request('https://www.lyit.ie', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const siteHeading = $('.carousel-caption');
    console.log(siteHeading.text());
  }
});