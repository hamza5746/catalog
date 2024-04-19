import {Image, StyleSheet, Text, View} from 'react-native';
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
import {ScrollView} from 'react-native-gesture-handler';

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
  const isFavorite = favorites.some(
    (favItem: RAnimeItem) => favItem?.mal_id === id,
  );
  useRefreshOnFocus(refetch);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(data);
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
            <ActivityIndicator animating={true} color="black" />
          ) : data ? (
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flexGrow: 1}}>
                <View>
                  <Image
                    style={{
                      width: 300,
                      height: 300,
                      backgroundColor: 'pink',
                    }}
                    source={{uri: data.images.jpg.image_url}}
                  />
                </View>
                <Text style={styles.textStyle}>{data.title}</Text>
                <Text style={styles.textStyle}>{data.year}</Text>
                <Text style={styles.textStyle}>{data.rating}</Text>
                <Text style={styles.textStyle}>{data.score}</Text>
              </View>
              <View style={{marginRight: 10}}>
                <TouchableOpacity onPress={toggleFavorite}>
                  <HeartIcons color={isFavorite ? '#f80000' : '#fffdf4'} />
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
const styles = StyleSheet.create({
  textStyle:{
    color:'black',
  }
});
