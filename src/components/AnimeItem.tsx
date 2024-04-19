import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RAnimeItem} from '../services/response.interface';
import {Button} from 'react-native-paper';

interface IAnimeItem {
  anime: RAnimeItem;
  detailButtonHandler: (id: number) => void;
  status?: 'upcoming' | 'complete' | 'airing';
}
const AnimeItem = React.memo(({
  anime,
  detailButtonHandler,
  status,
}: IAnimeItem) =>{
  return (
    <View style={{borderBottomWidth: 2}}>
      <Text>{anime.title}</Text>
      {!status || status !== 'upcoming' ?
        <>
          <Text>{anime.year}</Text>
          <Text>{anime.rating}</Text>
          <Text>{anime.score}</Text>
        </>
      : null}
      <Button onPressOut={() => detailButtonHandler(anime.mal_id)}>
        View more
      </Button>
    </View>
  );
})

const styles = StyleSheet.create({});

export default AnimeItem;