import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Button, IconButton, withTheme} from 'react-native-paper';
import {useFetchAnimeData} from '../services/anime.service';
import {RAnimeItem} from '../services/response.interface';
import KeyUtils from '../utilities/keyUtils';
import { ScrollView } from 'react-native-gesture-handler';

const AnimeListView = ({navigation}: any) => {
  const {data, isLoading} = useFetchAnimeData();

  const detailButtonHandler = (id: number) => {
    navigation.navigate(KeyUtils.routes.detailAnime, {id: id});
  };

  return (
    <ScrollView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        data.data.map((anime: RAnimeItem, index: number) => {
          return (
            <View key={anime.title + index} style={{borderBottomWidth: 2}}>
              <Text>{anime.title}</Text>
              <Text>{anime.year}</Text>
              <Text>{anime.rating}</Text>
              <Text>{anime.score}</Text>
              <Button onPressOut={() => detailButtonHandler(anime.mal_id)}>
                View more
              </Button>
            </View>
          );
        })
      ) : (
        <Text>Not Found</Text>
      )}
      <Text>AnimeListView</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default withTheme(AnimeListView);
