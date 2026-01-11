import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { prompt } = req.body;

  const prompts = [
    `${prompt}, opening scene`,
    `${prompt}, rising conflict`,
    `${prompt}, climax`,
    `${prompt}, ending scene`
  ];

  res.status(200).json({ prompts });
}