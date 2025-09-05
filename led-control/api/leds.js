let ledStatus = { led1: "off", led2: "off" }; // حافظه موقت برای وضعیت LEDها

export default async function handler(req, res) {
  if (req.method === "GET") {
    // برگرداندن وضعیت فعلی LEDها
    res.status(200).json(ledStatus);
  } else if (req.method === "POST") {
    // به‌روزرسانی وضعیت LEDها
    ledStatus = { ...ledStatus, ...req.body };
    res.status(200).json(ledStatus);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}