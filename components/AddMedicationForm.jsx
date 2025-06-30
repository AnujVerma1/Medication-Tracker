import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../constant/Colors";
import { TypeList, WhenToTake } from "../constant/Options";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  FormatDate,
  formatDateForText,
  formatTime,
  getDatesRange,
} from "../service/ConvertDateTime";
import { db } from "../config/FirebaseConfig";
import { getLocalStorage } from "../service/Storage";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "expo-router";
import { styles } from "../style/AddMedicationForm.style";

export default function AddMedicationForm() {
  const [formData, setFormData] = useState({});
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const SaveMedication = async () => {
    const docId = Date.now().toString();
    const user = await getLocalStorage("userDetail");
    if (
      !(
        formData?.name &&
        formData.type &&
        formData?.dose &&
        formData?.startDate &&
        formData?.endDate &&
        formData?.reminder
      )
    ) {
      Alert.alert("Enter all fields");
      return;
    }

    const dates = getDatesRange(formData?.startDate, formData?.endDate);

    setLoading(true);
    try {
      const medicationRef = doc(db, "medication", docId);
      await setDoc(medicationRef, {
        ...formData,
        userEmail: user?.email,
        docId: docId,
        dates: dates,
        action: [],
      });
      setLoading(false);
      Alert.alert("Great!", "Are you sure to add new medication", [
        {
          text: "Yes",
          onPress: () => {
            router.push("(tabs)");
          },
        },
      ]);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Medication</Text>

      <View style={styles.inputGroup}>
        <AntDesign
          style={styles.icon}
          name="medicinebox"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Medicine name"
          onChangeText={(value) => onHandleInputChange("name", value)}
        />
      </View>

      <FlatList
        style={styles.flatList}
        data={TypeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.inputGroup,
              { marginRight: 10 },
              {
                backgroundColor:
                  item.name == formData?.type?.name ? Colors.PRIMARY : "white",
              },
            ]}
            onPress={() => onHandleInputChange("type", item)}
          >
            <Text
              style={[
                styles.textinput,
                {
                  color: item.name == formData?.type?.name ? "white" : "black",
                },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.inputGroup}>
        <FontAwesome
          style={styles.icon}
          name="eyedropper"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Dose Ex. 2 or 5ml"
          onChangeText={(value) => onHandleInputChange("dose", value)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons
          style={styles.icon}
          name="time-outline"
          size={24}
          color="black"
        />
        <Picker
          selectedValue={formData?.when}
          onValueChange={(itemValue) => onHandleInputChange("when", itemValue)}
          style={styles.picker}
        >
          {WhenToTake.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <View style={styles.datePickerGroup}>
        <TouchableOpacity
          style={[styles.datePickerButton, { flex: 1 }]}
          onPress={() => setShowStartDate(true)}
        >
          <Ionicons
            style={styles.icon}
            name="calendar-outline"
            size={24}
            color="black"
          />
          <Text style={styles.text}>
            {formatDateForText(formData?.startDate) ?? "Start Date"}
          </Text>
        </TouchableOpacity>

        {showStartDate && (
          <RNDateTimePicker
            minimumDate={new Date()}
            onChange={(event) => {
              if (event.type === "set") {
                const selectedDate = FormatDate(event.nativeEvent.timestamp);
                onHandleInputChange("startDate", selectedDate);
              }
              setShowStartDate(false);
            }}
            value={
              formData?.startDate ? new Date(formData.startDate) : new Date()
            }
          />
        )}

        <TouchableOpacity
          style={[styles.datePickerButton, { flex: 1 }]}
          onPress={() => setShowEndDate(true)}
        >
          <Ionicons
            style={styles.icon}
            name="calendar-outline"
            size={24}
            color="black"
          />
          <Text style={styles.text}>
            {formatDateForText(formData?.endDate) ?? "End Date"}
          </Text>
        </TouchableOpacity>

        {showEndDate && (
          <RNDateTimePicker
            minimumDate={new Date()}
            onChange={(event) => {
              if (event.type === "set") {
                const selectedDate = FormatDate(event.nativeEvent.timestamp);
                onHandleInputChange("endDate", selectedDate);
              }
              setShowEndDate(false);
            }}
            value={formData?.endDate ? new Date(formData.endDate) : new Date()}
          />
        )}
      </View>

      <View style={styles.timePickerGroup}>
        <TouchableOpacity
          style={[styles.timePickerButton, { flex: 1 }]}
          onPress={() => setShowTimePicker(true)}
        >
          <Ionicons
            style={styles.icon}
            name="timer-outline"
            size={24}
            color="black"
          />
          <Text style={styles.text}>
            {formData?.reminder ?? "Select Reminder Time"}
          </Text>
        </TouchableOpacity>
      </View>

      {showTimePicker && (
        <RNDateTimePicker
          mode="time"
          onChange={(event) => {
            if (event.type === "set") {
              const selectedTime = formatTime(event.nativeEvent.timestamp);
              onHandleInputChange("reminder", selectedTime);
            }
            setShowTimePicker(false);
          }}
          value={
            formData?.reminder
              ? new Date(`1970-01-01T${formData.reminder}:00`)
              : new Date()
          }
        />
      )}

      <TouchableOpacity style={styles.button} onPress={SaveMedication}>
        {loading ? (
          <ActivityIndicator size={"large"} color={"white"} />
        ) : (
          <Text style={styles.buttonText}>Add New Medication</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
