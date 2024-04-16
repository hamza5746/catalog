import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from 'react-native-paper'

const AnimeListView=({theme}:any)=> {
  return (
    <View>
      <Text>AnimeListView</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default withTheme(AnimeListView)
