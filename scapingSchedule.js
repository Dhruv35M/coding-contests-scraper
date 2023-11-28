const schedule = require("node-schedule");
const { spawn } = require("child_process");

function scrapingScript() {
  const scrapingProcess = spawn("node", ["./scaper.js"]);

  scrapingProcess.stdout.on("data", (data) => {
    // console.log(`Scraping output: ${data}`);
  });

  scrapingProcess.stderr.on("data", (data) => {
    // console.error(`Scraping error: ${data}`);
  });

  scrapingProcess.on("close", (code) => {
    console.log(`Scraping process exited with code ${code}`);
  });
}

// Schedule the scraping task to run every 8 hours
const ScheduledTask = schedule.scheduleJob("*/20 * * * * *", () => {
  console.log("Starting scraping process...");
  scrapingScript();
});

module.exports = ScheduledTask;
