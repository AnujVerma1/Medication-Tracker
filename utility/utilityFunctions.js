import { ToastAndroid, Alert, Platform } from "react-native";
import { GetDateRangeToDisplay } from "../service/ConvertDateTime";
import { getLocalStorage } from "../service/Storage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { AddMedicationReminder } from "../components/AddMedicationReminder";
import axios from "axios";

export const GetDateRangeList = (setDateRange) => {
  const dateRange = GetDateRangeToDisplay();
  setDateRange(dateRange);
};

export const GetUserDetail1 = async (setUser) => {
  const userInfo = await getLocalStorage("userDetail");
  if (userInfo && userInfo.email) {
    setUser(userInfo);
  } else {
    showMessage("User email is undefined or missing from storage");
  }
};

export const GetUserDetail2 = async (setUser) => {
  const userInfo = await getLocalStorage("userDetail");
  setUser(userInfo);
};

export const GetMedicalList = async (selectedDate, setLoading, setMedList) => {
  setLoading(true);
  const user = await getLocalStorage("userDetail");

  if (!user?.email) {
    showMessage("User email is undefined");
    return;
  }

  setMedList([]);
  try {
    const q = query(
      collection(db, "medication"),
      where("userEmail", "==", user?.email),
      where("dates", "array-contains", selectedDate)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      showMessage("No medications found for the selected date.");
    }

    querySnapshot.forEach((doc) => {
      const medData = { ...doc.data(), docId: doc.id, selectedDate };

      AddMedicationReminder(medData);
      setMedList((prev) => {
        if (!prev.some((med) => med.docId === medData.docId)) {
          return [...prev, medData];
        }
        return prev;
      });
    });

    setLoading(false);
  } catch (e) {
    showMessage("Failed to fetch medications. Please try again.");
    setLoading(false);
  }
};

// export const fetchMedicines = async () => {
//   const response = await fetch('https://medicine-api-rdp7.onrender.com/api/medicine');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };
export const fetchMedicines = async () => {
  try {
    const response = await axios.get(
      "https://medicine-api-rdp7.onrender.com/api/medicine"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching medicines: " + error.message);
  }
};

export const fetchMedicineDetails = async (
  medicineName,
  setMedicineData,
  setLoading
) => {
  try {
    setLoading(true);
    const data = await fetchMedicines();

    const selectedMedicine = data.medicines.find(
      (item) => item.name.toLowerCase() === medicineName.toLowerCase()
    );

    setMedicineData(selectedMedicine || null);
  } catch (error) {
    showMessage("Error fetching data");
  } finally {
    setLoading(false);
  }
};

export const showMessage = (message) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert("Error", message);
  }
};
