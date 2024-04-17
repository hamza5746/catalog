import {apiPath, API_BASE_URL} from '../utilities/api.endpoint';
import axios from 'axios';
// import AnimeListView from '../views/AnimeListView';
import {useQuery} from '@tanstack/react-query';

const fetchAnimeList = async () => {
  const response = await axios.get(`${API_BASE_URL}${apiPath.AnimeList}`);
  return response.data;
};

const fetchAnimeById = async (id: number) => {
  console.log('id',id);
  const response = await axios.get(`${API_BASE_URL}${apiPath.AnimeList}/${id}`);
  return response.data;
};

export const useFetchAnimeData = () => {
  return useQuery({queryKey: ['AnimeList'], queryFn: fetchAnimeList});
};
export const useFetchAnimeWithId = (id: number) => {
  return useQuery({queryKey: [], queryFn: () => fetchAnimeById(id)});
};
