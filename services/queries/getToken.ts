import axios from "axios";
import { TokenRes } from "services/types";

const getToken = async () => {
  const res = await axios.get<TokenRes>(`/api/token`);
  return res.data;
};

export default getToken;
