
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetDateRangeToDisplay } from '../service/ConvertDateTime'
import moment from 'moment/moment'
import { GetMedicalList } from '../utility/utilityFunctions';
import MedicationCardItem from './MedicationCardItem'
import { styles } from '../style/HistoryComponent.style';
import { useRouter } from 'expo-router'
import { useMedicationState } from '../hooks/useMedicationState';

export default function HistoryComponent() {

  const { selectedDate, setSelectedDate, dateRange, setDateRange, medList, setMedList, loading, setLoading } =
    useMedicationState();

  const router = useRouter();

  useEffect(() => {
    GetDateList();
    GetMedicalList(selectedDate, setLoading, setMedList);
  }, [])

  const GetDateList = () => {
    const dates = GetDateRangeToDisplay();
    setDateRange(dates)
  }


  return medList?.length > 0 ? (
    <FlatList
      data={medList}
      style={styles.fullHeightBackground}
      scrollEnabled={true}
      ListHeaderComponent={
        <View style={styles.mainContainer}>
          <FlatList
            data={dateRange}
            horizontal
            style={styles.horizontalList}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.dateGroup,
                  item?.formattedDate === selectedDate ? styles.activeDateGroup : styles.inactiveDateGroup
                ]}
                onPress={() => {
                  setSelectedDate(item.formattedDate)
                  GetMedicalList(item.formattedDate, setLoading, setMedList)
                }}
              >
                <Text
                  style={[
                    styles.day,
                    item?.formattedDate === selectedDate ? styles.activeText : styles.inactiveText
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.date,
                    item?.formattedDate === selectedDate ? styles.activeText : styles.inactiveText
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      }
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push({
            pathname: '/action-modal',
            params: {
              ...item,
              selectedDate: selectedDate
            }
          })}
        >
          <MedicationCardItem medicine={item} selectedDate={selectedDate} />
        </TouchableOpacity>
      )}
    />
  ) : (
    <View style={[styles.fullHeightBackground, { height: '50%' }]}>
      <View style={styles.mainContainer}>
        <FlatList
          data={dateRange}
          horizontal
          style={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateGroup,
                item?.formattedDate === selectedDate ? styles.activeDateGroup : styles.inactiveDateGroup
              ]}
              onPress={() => {
                setSelectedDate(item.formattedDate)
                GetMedicalList(item.formattedDate, setLoading, setMedList)
              }}
            >
              <Text
                style={[
                  styles.day,
                  item?.formattedDate === selectedDate ? styles.activeText : styles.inactiveText
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.date,
                  item?.formattedDate === selectedDate ? styles.activeText : styles.inactiveText
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.centeredView}>
        <Text style={styles.noHistoryText}>No History</Text>
      </View>
    </View>

  );
}












