import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getToken } from "services/queries";
import { QueryKeyEnum, TokenRes } from "services/types";

const useGetToken = (options?: UseQueryOptions<TokenRes>) => {
  return useQuery({
    queryKey: [QueryKeyEnum.TOKEN],
    queryFn: getToken,
    ...options,
  });
};

export default useGetToken;
