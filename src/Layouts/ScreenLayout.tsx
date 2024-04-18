import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenLayout = ({style,children}:any) => {
  return (
    <View style={{padding:20,...style}}>
      {children}
    </View>
  )
}

export default ScreenLayout

const styles = StyleSheet.create({})