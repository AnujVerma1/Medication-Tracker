import { useState } from 'react';
import moment from 'moment';

export function useMedicationState() {
  const [selectedDate, setSelectedDate] = useState(moment().format('MM/DD/YYYY'));
  const [dateRange, setDateRange] = useState([]);
  const [loading, setLoading] = useState(false);
  const [medList, setMedList] = useState([]);

  return {
    selectedDate,
    setSelectedDate,
    dateRange,
    setDateRange,
    medList,
    setMedList,
    loading,
    setLoading,
  };
}
