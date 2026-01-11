import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { prompt } = req.body;

  res.status(200).json({
    motionPrompt: `${prompt}, dynamic camera movement, cinematic motion, smooth transition`
  });
}
