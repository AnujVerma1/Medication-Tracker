import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 60,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  medicineName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  medicineTime: {
    fontSize: 17,
  },
  medicineDose: {
    color: Colors.WHITE,
  },
  reminderContainer: {
    padding: 10,
    borderRadius: 0.1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  reminderTextContainer: {
    marginLeft: 10,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.BRIGHT_BLUE,
  },
  removeContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.RED,
    backgroundColor: Colors.RED,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
  removeText: {
    fontSize: 10,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  statusContainer: {
    position: "absolute",
    top: 5,
    padding: 7,
  },
});
