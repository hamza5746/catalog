import {apiPath, API_BASE_URL} from '../utilities/api.endpoint';
import axios from 'axios';
// import AnimeListView from '../views/AnimeListView';
import {useQuery} from '@tanstack/react-query';
import { AnimStatus } from '../enums/anime';

const fetchAnimeList = async (query?:string) => {
  const response = await axios.get(`${API_BASE_URL}${apiPath.AnimeList}${query ? '?'+query: ''}`);
  return response.data;
};

const fetchAnimeById = async (id: number) => {
  console.log('id',id);
  const response = await axios.get(`${API_BASE_URL}${apiPath.AnimeList}/${id}`);
  return response.data;
};

export const useFetchAnimeData = ({query,status}:{query?:string,status:AnimStatus}) => {
  return useQuery({queryKey: ['AnimeList',status], queryFn: ()=>fetchAnimeList(query)});
};
export const useFetchAnimeWithId = (id: number) => {
  return useQuery({queryKey: [], queryFn: () => fetchAnimeById(id)});
};
