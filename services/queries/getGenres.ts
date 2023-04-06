import api from "services/api";
import { GenresRes } from "services/types";

const getGenres = async () => {
  const res = await api.get<GenresRes>(
    "/recommendations/available-genre-seeds"
  );
  return res.data;
};

export default getGenres;
