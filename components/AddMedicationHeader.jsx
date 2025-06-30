import { View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import {styles} from '../style/AddMedicationHeader.style';
import images from '../constant/images';

export default function AddMedicationHeader() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Image 
        source={images.consult} 
        style={styles.image}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}


