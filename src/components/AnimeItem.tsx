import {Image, StyleSheet, Text, View} from 'react-native';
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
    <View style={{borderBottomWidth: 2, paddingTop:10, display:'flex',flexDirection:'row'}}>
      <View style={{flexGrow:1}}>
        <Text style={styles.textStyle}>{anime?.title}</Text>
        <Image
          style={{
          width: 50,
          height:50,
          backgroundColor: "pink"
        }}
          source={{ uri: anime?.images?.jpg?.image_url }}
        />
        {!status || status !== 'upcoming' && anime ?
          <>
            <Text style={styles.textStyle}>{anime.year}</Text>
            <Text style={styles.textStyle}>{anime.rating}</Text>
            <Text style={styles.textStyle}>{anime.score}</Text>
          </>
        : null}
      </View>
      <View>
        <Button mode="outlined" onPressOut={() => detailButtonHandler(anime.mal_id)}>
          View more
        </Button>
      </View>
    </View>
  );
})

const styles = StyleSheet.create({
  textStyle:{
    color:'black',
    width:220
  }
});

export default AnimeItem;