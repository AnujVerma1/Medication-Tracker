import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 30,
    color: Colors.GRAY1,
  },
  subText: {
    fontSize: 16,
    color: Colors.GRAY1,
    textAlign: "center",
    marginTop: 20,
  },
  addButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 30,
  },
  addButtonText: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.WHITE,
  },
});
