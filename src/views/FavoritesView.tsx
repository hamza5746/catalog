import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/store';
import { RAnimeItem } from '../services/response.interface';
import KeyUtils from '../utilities/keyUtils'
import { Button } from 'react-native-paper';
import AnimeItem from '../components/AnimeItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
interface FavoriteListProps {
  favorites: RAnimeItem[];
}
const mapStateToProps = (state: RootState) => ({
  favorites: state.favorites.favorites,
});

const connector = connect(mapStateToProps);

type Props = NativeStackScreenProps<RootStackParamList, 'favoritesView'>;
const FavoritesView:FC<PropsFromRedux & FavoriteListProps> = ({favorites,navigation}) => {
  const detailButtonHandler = (id: number) => {
    navigation.navigate(KeyUtils.routes.detailAnime, {id: id});
  };
  console.log('favorites',favorites);
  return (
    <View>
      {favorites.map((anime: RAnimeItem, index: number) => {
          return (
            <AnimeItem key={anime?.title + index} detailButtonHandler={detailButtonHandler} anime={anime} />
          );
        })}
    </View>
  )
}

const styles = StyleSheet.create({})
export default connector(FavoritesView)