import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScreenLayout = ({style,children}:any) => {
  return (
      <View style={{padding:20,...style}}>
        {children}
      </View>
    
  )
}

export default ScreenLayout

const styles = StyleSheet.create({})