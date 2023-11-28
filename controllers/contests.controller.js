const fs = require("fs").promises;
const path = require("path");
const OUTPUT_DIR = path.join(__dirname, "../output");

exports.getContests = async (req, res) => {
  const { platform } = req.params;
  const filePath = path.join(OUTPUT_DIR, `${platform}_contests.json`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const contests = JSON.parse(fileContent);
    res.json(contests);
  } catch (error) {
    console.error("Error loading contests:", error);
    res.status(500).json({ error: "Failed to load contests" });
  }
};

exports.getAllContests = async (req, res) => {
  try {
    const files = await fs.readdir(OUTPUT_DIR);
    const contestData = {};

    for (const file of files) {
      if (file.endsWith("all_contests.json")) {
        const platform = file.replace("_contests.json", "");
        const fileContent = await fs.readFile(
          path.join(OUTPUT_DIR, file),
          "utf-8"
        );
        contestData[platform] = JSON.parse(fileContent);
      }
    }
    resr.status(200).json(contestData);
  } catch (error) {
    console.error("Error loading all contests:", error);
    res.status(500).json({ error: "Failed to load all contests" });
  }
};
