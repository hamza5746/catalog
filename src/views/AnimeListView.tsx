import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  IconButton,
  withTheme,
} from 'react-native-paper';
import {useFetchAnimeData} from '../services/anime.service';
import {RAnimeItem} from '../services/response.interface';
import KeyUtils from '../utilities/keyUtils';
import {ScrollView} from 'react-native-gesture-handler';
import AnimeItem from '../components/AnimeItem';
import BottomTabs from '../components/BottomTabs';
import {AnimStatus} from '../enums/anime';
import ScreenLayout from '../Layouts/ScreenLayout';
import ListView from '../components/ListView';
import SearchAnime from '../components/SearchAnime';
import {debounce} from '../utilities/utils/debounce';

const AnimeListView = ({navigation}: any) => {
  const [status, setStatus] = useState<AnimStatus>(AnimStatus.AIRING);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchText, setSearchText] = useState('');

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useFetchAnimeData({
    query: `status=${status}&q=${searchText}`,
    status: status,
    searchText: searchText,
  });

  const detailButtonHandler = (id: number) => {
    navigation.navigate(KeyUtils.routes.detailAnime, {id: id});
  };

  const changeTab = (tab: AnimStatus) => {
    setStatus(tab);
  };

  const renderItem = ({item}: {item: RAnimeItem}) => {
    return (
      <AnimeItem
        detailButtonHandler={detailButtonHandler}
        anime={item}
        status={status}
      />
    );
  };
  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const onChangeValueHandler = (val: string) => {
    debounce(debounceTimeoutRef, () => setSearchText(val), 3000);
  };

  return (
    <ScreenLayout style={styles.container}>
      <SearchAnime onChangeValueHandler={onChangeValueHandler} />
      {isLoading ? (
        <ActivityIndicator animating={true} color="black" />
      ) : data?.pages.length ? (
        <>
          <View>
            <FlatList
              data={data.pages.map(page => page.data.data).flat()}
              renderItem={renderItem}
              style={{marginBottom: 60}}
              onEndReached={loadMore}
              onEndReachedThreshold={0.8}
            />
          </View>
        </>
      ) : (
        <Text>Not Found</Text>
      )}
      <BottomTabs changeTab={changeTab} />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
export default withTheme(AnimeListView);
