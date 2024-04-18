import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator, Button, IconButton, withTheme} from 'react-native-paper';
import {useFetchAnimeData} from '../services/anime.service';
import {RAnimeItem} from '../services/response.interface';
import KeyUtils from '../utilities/keyUtils';
import { ScrollView } from 'react-native-gesture-handler';
import AnimeItem from '../components/AnimeItem';
import BottomTabs from '../components/BottomTabs';
import { AnimStatus } from '../enums/anime';
import ScreenLayout from '../Layouts/ScreenLayout';

const AnimeListView = ({navigation}: any) => {
  
  const [status, setStatus] = React.useState<AnimStatus>(AnimStatus.AIRING)

  const {data, isLoading} = useFetchAnimeData({query:`status=${status}`,status:status});

  const detailButtonHandler = (id: number) => {
    navigation.navigate(KeyUtils.routes.detailAnime, {id: id});
  };
  
  const changeTab = (tab:AnimStatus) =>{
    setStatus(tab);
  }
  return (
    
    <ScreenLayout style={styles.container}>
      {isLoading ? (
        <ActivityIndicator animating={true} color='black'/>
      ) : data ? (
        <>
        <ScrollView>
          <View style={{marginBottom:30}}>
        {data.data?.map((anime: RAnimeItem, index: number) => {
            return (
              <AnimeItem key={anime.title + index} detailButtonHandler={detailButtonHandler} anime={anime} status={status}/>
            );
          })
          }
          </View>
          </ScrollView>  
          <BottomTabs changeTab={changeTab}/>
          </>
        
      ) : (
        <Text>Not Found</Text>
      )
  }
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
