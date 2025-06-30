import { View, Text, Image,  TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { scheduleNotification } from '../service/NotificationService';
import {styles} from '../style/MedicationCardItem.style';


export default function MedicationCardItem({ medicine, selectedDate, onRemove }) {
  const [status, setStatus] = useState();

  useEffect(() => {
    CheckStatus();

    if (medicine?.reminder) {
      const reminderTime = moment(`${selectedDate} ${medicine?.reminder}`, "MM/DD/YYYY hh:mm A").toDate();
      scheduleNotification(
        'Medication Reminder',
        `Time to take ${medicine?.name}`,
        reminderTime
      );
    }
  }, [medicine]);

  const CheckStatus = () => {
    if (Array.isArray(medicine?.action) && medicine?.action.length > 0) {
      const data = medicine?.action.find((item) => item.date === selectedDate);
      setStatus(data);
    } else {
      setStatus(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: medicine?.type?.icon }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.medicineName}>{medicine?.name}</Text>
          <Text style={styles.medicineTime}>{medicine?.when}</Text>
          <Text style={styles.medicineDose}>
            {medicine?.dose} {medicine?.type.name}
          </Text>
        </View>
      </View>

      {medicine?.reminder && (
        <View style={styles.reminderContainer}>
          <Ionicons name="notifications-outline" size={24} color="#007BFF" />
          <View style={styles.reminderTextContainer}>
            <Text style={styles.reminderTitle}>Reminder:</Text>
          </View>
        </View>
      )}

      <View style={styles.removeContainer}>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>

      {status?.date && (
        <View style={styles.statusContainer}>
          {status?.status === 'Taken' ? (
            <Ionicons name="checkmark-circle" size={24} color="#0da624" />
          ) : (
            status?.status === 'Missed' && (
              <Ionicons name="close-circle" size={24} color="red" />
            )
          )}
        </View>
      )}
    </View>
  );
}


