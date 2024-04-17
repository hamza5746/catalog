import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {useFetchAnimeWithId} from '../services/anime.service';
import { useFocusEffect } from '@react-navigation/native';
import HeartIcons from '../assets/WrapperIcons/HeartIcons';

export default function DetailAnime({route, navigation}: any) {
  const {id} = route.params;
  const {isLoading, data,refetch} = useFetchAnimeWithId(id);

  useRefreshOnFocus(refetch);

  return (
    <SafeAreaView>
      <View>
        <Button mode="outlined" onPressOut={() => navigation.goBack()}>
          Back
        </Button>
        <View style={{marginTop: 10}}>
          {isLoading ? (<Text> Loading ...</Text>) :
             data ? 
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{flexGrow:1}}>
                        <Text>{data.data.title}</Text>
                        <Text>{data.data.year}</Text>
                        <Text>{data.data.rating}</Text>
                        <Text>{data.data.score}</Text>
                    </View>
                    <View style={{marginRight:10 }}>
                        <HeartIcons color='#ffffff'/>
                    </View>
                </View>
             : 
             (<Text>Not Found</Text>) }
        </View>
      </View>
    </SafeAreaView>
  );
}

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
    const firstTimeRef = React.useRef(true)
  
    useFocusEffect(
      React.useCallback(() => {
        if (firstTimeRef.current) {
          firstTimeRef.current = false
          return
        }
  
        refetch()
      }, [refetch]),
    )
  }

const styles = StyleSheet.create({});
