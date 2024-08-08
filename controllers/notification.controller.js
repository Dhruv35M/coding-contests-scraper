exports.notification = async (req, res) => {
  const message = `Experience any issues? Reinstall after removing for a smooth fix.`;
  try {
    res.status(200).json({ message: message });
  } catch (error) {
    console.error("failed to send notification:", error);
    res.status(500).json({ error: "failed to send notification" });
  }
};
