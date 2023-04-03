import type { NextApiHandler } from "next";
import axios from "axios";
import qs from "qs";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== "GET") {
      res.status(405);
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

    res.status(200).json(response.data);
  } catch (err: any) {
    res.status(err.status).json(err.message);
  }
};

export default handler;
