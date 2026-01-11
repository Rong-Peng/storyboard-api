// api/breakdown.js

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { visualStyle, targetMedia, aspectRatio } = req.body;

  const prompt = `${visualStyle} style, ${targetMedia} composition, ${aspectRatio} aspect ratio`;

  res.status(200).json({ prompt });
}