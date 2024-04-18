import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Button} from 'react-native-paper';
import {useFetchAnimeWithId} from '../services/anime.service';
import {useFocusEffect} from '@react-navigation/native';
import HeartIcons from '../assets/WrapperIcons/HeartIcons';
import {connect, ConnectedProps} from 'react-redux';
import {RAnimeItem} from '../services/response.interface';
import {RootState} from '../redux/store';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {addToFavorites, removeFromFavorites} from '../redux/actions';
import {TouchableOpacity} from 'react-native';



const mapStateToProps = (state: RootState) => ({
  favorites: state.favorites.favorites,
});

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = NativeStackScreenProps<RootStackParamList, 'detailAnime'>;

const DetailAnime: FC<PropsFromRedux & Props> = ({
  route,
  navigation,
  favorites,
  addToFavorites,
  removeFromFavorites,
}) => {
  const {id} = route.params;
  const {isLoading, data, refetch} = useFetchAnimeWithId(id);
  const isFavorite = favorites.some((favItem:RAnimeItem) => favItem.mal_id === id);

  useRefreshOnFocus(refetch);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(data.data);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Button mode="outlined" onPressOut={() => navigation.goBack()}>
          Back
        </Button>
        <View style={{marginTop: 10}}>
          {isLoading ? (
            <ActivityIndicator animating={true} color='black'/>
          ) : data ? (
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flexGrow: 1}}>
                <Text>{data.data.title}</Text>
                <Text>{data.data.year}</Text>
                <Text>{data.data.rating}</Text>
                <Text>{data.data.score}</Text>
              </View>
              <View style={{marginRight: 10}}>
                <TouchableOpacity onPress={toggleFavorite}>
                  <HeartIcons color={isFavorite ? "#f80000" : "#ffffff"} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text>Not Found</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch]),
  );
}

export default connector(DetailAnime);
const styles = StyleSheet.create({});
