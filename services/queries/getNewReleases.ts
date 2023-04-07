import api from "services/api";
import { AlbumsParams, AlbumsRes } from "services/types";

const getNewReleases = async (params?: AlbumsParams) => {
  const res = await api.get<AlbumsRes>("/browse/new-releases", { params });
  return res.data;
};

export default getNewReleases;
