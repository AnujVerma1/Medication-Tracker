import { View, FlatList } from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import MedicationList from '../../components/MedicationList';
import Home from '../../components/Home';
import {styles} from '../../style/(tabs).index.style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.homeContainer}>
        <Home />
      </View>
      <FlatList
        data={[]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <MedicationList />
          </View>
        }
      />
    </View>
  );
}


