import api from "services/api";
import { PlaylistsParams, PlaylistsRes } from "services/types";

const getFeaturedPlaylists = async (params?: PlaylistsParams) => {
  const res = await api.get<PlaylistsRes>("/browse/featured-playlists", {
    params,
  });
  return res.data;
};

export default getFeaturedPlaylists;
