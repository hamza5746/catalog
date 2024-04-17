import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

export default function HeartIcons({color='#1C274C'}:{color:string}) {
  return (
    <Svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
        <Path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill={color}/>
    </Svg>
  )
}

const styles = StyleSheet.create({})