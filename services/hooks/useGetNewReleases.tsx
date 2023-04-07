import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getNewReleases } from "services/queries";
import { AlbumsParams, AlbumsRes, QueryKeyEnum } from "services/types";

const useGetNewReleases = (
  params?: AlbumsParams,
  options?: UseQueryOptions<AlbumsRes>
) => {
  return useQuery({
    queryKey: [QueryKeyEnum.ALBUMS, params],
    queryFn: () => getNewReleases(params),
    ...options,
  });
};

export default useGetNewReleases;
