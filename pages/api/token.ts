import axios from "axios";
import type { NextApiHandler } from "next";
import qs from "qs";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== "GET") {
      res.status(405).json({ message: "Method Not Allowed" });
      return;
    }

    const response = await axios.post(
      `${process.env.SPOTIFY_ACCOUNT_API_URL}/token`,
      qs.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    res.setHeader("Cache-Control", "max-age=1800, private");
    res.status(200).json(response.data);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json(err.message);
    }
  }
};

export default handler;
