import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.WHITE,
  },

  imageBanner: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  horizontalList: {
    marginTop: 15,
  },
  dateGroup: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    marginRight: 15,
    borderRadius: 10,
  },
  activeDateGroup: {
    backgroundColor: Colors.PRIMARY,
  },
  inactiveDateGroup: {
    backgroundColor: Colors.WHITE_SMOKE,
  },
  day: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
  },
  activeText: {
    color: Colors.WHITE,
  },
  inactiveText: {
    color: Colors.BLACK,
  },
  noMedicationText: {
    fontSize: 25,
    textAlign: "center",
    padding: 30,
    fontWeight: "bold",
    color: Colors.GRAY1,
  },
});
