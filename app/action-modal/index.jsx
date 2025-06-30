
import { View, Text,  Image, TouchableOpacity, Alert, FlatList, ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '../../constant/Colors';
import MedicationCardItem from '../../components/MedicationCardItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment';
import { db } from '../../config/FirebaseConfig';
import {styles} from '../../style/action_modal.style';
import { fetchMedicineDetails, showMessage } from '../../utility/utilityFunctions';
import images from '../../constant/images';


export default function MedicationActionModal() {
  const medicine = useLocalSearchParams();
  const [medicineData, setMedicineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const UpdateActionStatus = async (status) => {
    try {
      const docRef = doc(db, 'medication', medicine?.docId);
      await updateDoc(docRef, {
        action: arrayUnion({
          status: status,
          time: moment().format('LT'),
          date: medicine?.selectedDate,
        }),
      });
      Alert.alert(status, 'Response Saved!', [
        {
          text: 'OK',
          onPress: () => router.replace('(tabs)'),
        },
      ]);
    } catch (e) {
      showMessage('undefined error'); 
    }
  };

  useEffect(() => {
   
    fetchMedicineDetails(medicine.name,setMedicineData,setLoading);
  }, [medicine?.name]);
  
  return (

    <View style={styles.container}>
      <Image source={images.notification} style={styles.notificationImage} />
      <Text style={styles.selectedDate}>{medicine?.selectedDate}</Text>
      <Text style={styles.timeToTake}>It's time to take</Text>
  
      <MedicationCardItem medicine={medicine} />
  
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => UpdateActionStatus('Missed')}>
          <Ionicons name="close-outline" size={24} color="red" />
          <Text style={styles.closeBtnText}>Missed</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.successBtn} onPress={() => UpdateActionStatus('Taken')}>
          <Ionicons name="checkmark-outline" size={24} color="white" />
          <Text style={styles.successBtnText}>Taken</Text>
        </TouchableOpacity>
      </View>
  
      <TouchableOpacity onPress={() => router.back()} style={styles.closeIcon}>
        <Ionicons name="close-circle" size={44} color="gray" />
      </TouchableOpacity>
  
      {loading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : medicineData ? (
        <FlatList
          data={[
            { key: 'Name', value: medicineData.name },
            { key: 'Safe Dosage', value: medicineData.safeDosage },
            { key: 'Precautions', value: medicineData.precautions },
            { key: 'About', value: medicineData.about },
          ]}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.infoRow}>
              <Text style={styles.infoKey}>{item.key}:</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noMedicineText}>Medicine info not found!</Text>
      )}
    </View>
 
  );
  
}



