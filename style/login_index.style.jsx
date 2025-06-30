import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: 210,
    height: 450,
    borderRadius: 23,
  },
  contentContainer: {
    padding: 25,
    backgroundColor: Colors.PRIMARY,
    height: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 25,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.PRIMARY,
  },
  note: {
    color: Colors.WHITE,
    marginTop: 4,
  },
});
