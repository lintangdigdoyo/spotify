import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getFeaturedPlaylists } from "services/queries";
import { PlaylistsRes, PlaylistsParams, QueryKeyEnum } from "services/types";

const useGetFeaturedPlaylists = (
  params?: PlaylistsParams,
  options?: UseQueryOptions<PlaylistsRes>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.FEATURED_PLAYLISTS, params],
    queryFn: () => getFeaturedPlaylists(params),
    ...options,
  });
};

export default useGetFeaturedPlaylists;
