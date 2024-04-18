import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {TouchableOpacity} from 'react-native'
import { AnimStatus } from '../enums/anime';
export default function BottomTabs({changeTab}:{changeTab:(tab:AnimStatus)=>void}) {
    const [selectedTab, setSelectedTab] = useState<AnimStatus>(AnimStatus.AIRING);

    const handleTabPress = (tab:AnimStatus) => {
      setSelectedTab(tab);
      changeTab(tab)
      
      // Perform filtering based on the selected tab
      // For example, update state to filter the list based on tab
    };
  
return (
    <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === AnimStatus.AIRING && styles.selectedTab]}
          onPress={() => handleTabPress(AnimStatus.AIRING)}
        >
          <Text style={styles.tabText}>Airing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === AnimStatus.COMPLETE && styles.selectedTab]}
          onPress={() => handleTabPress(AnimStatus.COMPLETE)}
        >
          <Text style={styles.tabText}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === AnimStatus.UPCOMING && styles.selectedTab]}
          onPress={() => handleTabPress(AnimStatus.UPCOMING)}
        >
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff', // Set background color of tabs
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1, // Ensure tabs are above content
      },
      content: {
        flex: 1,
        marginTop: 40, // Adjust to make space for the fixed tabs
      },
      tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
      },
      tabText: {
        fontSize: 16,
      },
  });