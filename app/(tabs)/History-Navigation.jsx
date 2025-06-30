import { View, Text, Image} from 'react-native'
import React from 'react'
import HistoryComponent from '../../components/HistoryComponent'
import {styles} from '../../style/History-Navigation.style';
import images from '../../constant/images';

export default function Extra1() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image 
          style={styles.imageBanner} 
          source={images.med_history} 
        />
        <Text style={styles.header}>Medication History</Text>
      </View>
      <HistoryComponent/>
    </View>
  )
}


