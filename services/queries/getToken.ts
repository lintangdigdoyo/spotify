import axios from "axios";
import { Token } from "services/types";

const getToken = async () => {
  const res = await axios.get<Token>(`/api/token`);
  return res.data;
};

export default getToken;
