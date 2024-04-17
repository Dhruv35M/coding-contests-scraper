const schedule = require("node-schedule");
const scraper = require("./scraper");

function scrapingScript() {
  try {
    console.log("Starting scraping process...");
    scraper.runScraper(); // Call the scraping function directly from scraper.js
  } catch (error) {
    console.error("Scraping failed:", error);
  }
}

// Schedule the scraping task to run every hour
const ScheduledTask = schedule.scheduleJob("0 * * * *", () => {
  scrapingScript();
});

module.exports = ScheduledTask;
