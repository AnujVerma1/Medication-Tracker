
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../constant/Colors';
import { GetDateRangeList, GetMedicalList, showMessage } from '../utility/utilityFunctions';
import MedicationCardItem from './MedicationCardItem';
import EmptyState from './EmptyState';
import { useRouter } from 'expo-router';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';
import {styles} from '../style/MedicationList.style';
import { useMedicationState } from '../hooks/useMedicationState';


export default function MedicationList() {
  
  const { selectedDate, setSelectedDate, dateRange, setDateRange, medList, setMedList, loading, setLoading } =
    useMedicationState();
  const router = useRouter();

  useEffect(() => {
    
    GetDateRangeList(setDateRange);
    GetMedicalList(selectedDate, setLoading, setMedList);
  }, [selectedDate]);

  const removeMedication = async (docId) => {
    try {
      const docRef = doc(db, 'medication', docId);
      await deleteDoc(docRef);
      setMedList((prevMedications) => prevMedications.filter((med) => med.docId !== docId));
     
    } catch (error) {
      
      showMessage('error removing medication'); 
    }
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={dateRange}
        horizontal
        style={styles.list_margin}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dateGroup,
              { backgroundColor: item?.formattedDate === selectedDate ? Colors.PRIMARY : '#ECECEC' },
            ]}
            onPress={() => {
              setSelectedDate(item.formattedDate);
              GetMedicalList(item.formattedDate, setLoading, setMedList);
            }}
          >
            <Text
              style={[
                styles.day,
                { color: item?.formattedDate === selectedDate ? 'white' : 'black' },
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.date,
                { color: item?.formattedDate === selectedDate ? 'white' : 'black' },
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />

      {medList?.length > 0 ? ( 
        <FlatList
          data={medList}
          onRefresh={() => GetMedicalList(selectedDate, setLoading, setMedList)}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: '/action-modal',
                  params: {
                    ...item,
                    selectedDate: selectedDate,
                  },
                })
              }
            >
              <MedicationCardItem
                medicine={item}
                selectedDate={selectedDate}
                onRemove={() => removeMedication(item.docId)}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <EmptyState />
      )}
    </View>
  );
}


