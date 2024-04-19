import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimeItem from './AnimeItem';
import {RAnimeItem} from '../services/response.interface';
import {AnimStatus} from '../enums/anime';

interface IListView {
  data?: RAnimeItem[];
  detailButtonHandler: (id:number) => void;
  status: AnimStatus;
}
const ListView = ({data, detailButtonHandler, status}: IListView) => {
  return (
    <View>
      {data?.map((anime: RAnimeItem, index: number) => {
        return (
          <AnimeItem
            key={anime.title + index}
            detailButtonHandler={detailButtonHandler}
            anime={anime}
            status={status}
          />
        );
      })}
    </View>
  );
};
export default ListView;
const styles = StyleSheet.create({});
