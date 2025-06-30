import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: Colors.GRAY,
  },
  inputContainer: {
    marginTop: 25,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    marginTop: 35,
  },
  buttonText: {
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: "center",
  },
  buttonCreate: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  buttonCreateText: {
    fontSize: 17,
    color: Colors.PRIMARY,
    textAlign: "center",
  },
});
