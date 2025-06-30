import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  fullHeightBackground: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    padding: 5,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  noHistoryText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.GRAY1,
  },
});
