export default function handler(req, res) {
  res.status(200).json({
    token: process.env.TELEGRAM_TOKEN,
    chat_id: process.env.CHAT_ID
  });
}
