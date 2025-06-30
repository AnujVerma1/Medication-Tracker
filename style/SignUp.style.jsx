import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.GRAY,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: Colors.WHITE,
  },
  buttonCreate: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    alignItems: "center",
  },
  buttonTextAlt: {
    fontSize: 17,
    color: Colors.PRIMARY,
  },
});
