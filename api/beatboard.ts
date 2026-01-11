import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { prompt } = req.body;

  const prompts = Array.from({ length: 9 }).map(
    (_, i) => `${prompt}, scene ${i + 1}`
  );

  res.status(200).json({ prompts });
}