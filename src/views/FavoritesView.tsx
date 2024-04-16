import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from 'react-native-paper'

const FavoritesView = ({theme}: any) => {
  return (
    <View>
      <Text>FavoritesView</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default withTheme(FavoritesView)