import { QUERY_KEYS } from "@/constants/queryKeys";
import { getRepos, search } from "@/services/search";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (username: string) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.POST_USERNAME, username],
    queryFn: () => search(username),
  });

  return query;
};

export const useRepos = (username: string, page: number) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.REPO, page],
    queryFn: () => getRepos(username, page),
  });

  return query;
};
