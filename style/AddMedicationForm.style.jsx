import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 19,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY1,
    marginTop: 10,
    backgroundColor: Colors.WHITE,
  },
  textinput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    color: Colors.PRIMARY,
    borderRightWidth: 1,
    paddingRight: 12,
    borderColor: Colors.GRAY1,
  },
  text: {
    fontSize: 16,
    padding: 10,
    flex: 1,
    marginLeft: 10,
  },
  flatList: {
    marginTop: 5,
  },
  picker: {
    width: "90%",
  },
  datePickerGroup: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  datePickerButton: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY1,
    backgroundColor: Colors.WHITE,
  },
  timePickerGroup: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  timePickerButton: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY1,
    backgroundColor: Colors.WHITE,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: "center",
  },
});
