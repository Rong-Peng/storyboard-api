import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { visualStyle, targetMedia, aspectRatio } = req.body;

  const prompt = `${visualStyle} style, ${targetMedia} composition, ${aspectRatio} aspect ratio, cinematic lighting, high detail`;

  res.status(200).json({
    prompt
  });
}