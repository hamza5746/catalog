import {apiPath, API_BASE_URL} from '../utilities/api.endpoint';
import axios from 'axios';
// import AnimeListView from '../views/AnimeListView';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {AnimStatus} from '../enums/anime';

const fetchAnimePageAmimatedList = async (
  pageParam: number,
  query?: string,
) => {
  const response = await axios.get(
    `${API_BASE_URL}${apiPath.AnimeList}?page=${pageParam}${
      query ? '&' + query : ''
    }`,
  );
  return response;
};

const fetchAnimeById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}${apiPath.AnimeList}/${id}`);
  return response.data.data;
};

export const useFetchAnimeData = ({
  query,
  status,
  searchText,
}: {
  query?: string;
  status: AnimStatus;
  searchText: string;
}) => {
  return useInfiniteQuery({
    queryKey: ['AnimeList', status, searchText],
    queryFn: ({pageParam}) => fetchAnimePageAmimatedList(pageParam, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // Calculate the next page number based on your pagination logic
      const nextPage = lastPage.data?.pagination?.current_page + 1;
      // Check if there are more pages to fetch
      return lastPage.data?.pagination.has_next_page ? nextPage : undefined;
    },
  });
};
export const useFetchAnimeWithId = (id: number) => {
  return useQuery({queryKey: [], queryFn: () => fetchAnimeById(id)});
};
