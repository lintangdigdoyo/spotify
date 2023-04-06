import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import getGenres from "services/queries/getGenres";
import { GenresRes, QueryKeyEnum } from "services/types";

const useGetGenres = (options?: UseQueryOptions<GenresRes>) => {
  return useQuery({
    queryKey: [QueryKeyEnum.GENRES],
    queryFn: getGenres,
    ...options,
  });
};

export default useGetGenres;
