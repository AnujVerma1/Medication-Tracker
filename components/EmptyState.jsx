import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import {styles} from '../style/EmptyState.style';
import images from '../constant/images';

export default function EmptyState() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={images.medicine} style={styles.image} />
      <Text style={styles.headerText}>No Medications!</Text>
      <Text style={styles.subText}>You have 0 medications setup, Kindly setup your medications</Text>

      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add-new-medication')}>
        <Text style={styles.addButtonText}>+Add New Medication</Text>
      </TouchableOpacity>
    </View>
  )
}


