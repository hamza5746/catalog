import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function EmptyComponent() {
  return (
    <View style={styles.container}>
      <Text>Not Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
