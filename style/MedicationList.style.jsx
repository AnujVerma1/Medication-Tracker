import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  main: {
    marginTop: 25,
  },
  list_margin: {
    marginTop: 15,
  },
  dateGroup: {
    padding: 15,
    backgroundColor: Colors.WHITE_SMOKE,
    display: "flex",
    alignItems: "center",
    marginRight: 15,
    borderRadius: 10,
  },
  day: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
