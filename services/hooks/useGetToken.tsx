import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import getToken from "services/queries/getToken";
import { QueryKeyEnum, Token } from "services/types";

const useGetToken = (options?: UseQueryOptions<Token>) => {
  return useQuery({
    queryKey: [QueryKeyEnum.TOKEN],
    queryFn: getToken,
    ...options,
  });
};

export default useGetToken;
