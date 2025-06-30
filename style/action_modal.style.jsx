import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  notificationImage: {
    width: 80,
    height: 80,
  },
  selectedDate: {
    fontSize: 18,
  },
  timeToTake: {
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 35,
  },
  closeBtn: {
    padding: 10,
    flexDirection: "row",
    gap: 6,
    borderWidth: 1,
    alignItems: "center",
    borderColor: Colors.RED,
    borderRadius: 10,
  },
  closeBtnText: {
    fontSize: 20,
    color: Colors.RED,
  },
  successBtn: {
    padding: 10,
    flexDirection: "row",
    gap: 6,
    backgroundColor: Colors.GREEN,
    alignItems: "center",
    borderRadius: 10,
  },
  successBtnText: {
    fontSize: 20,
    color: Colors.WHITE,
  },
  closeIcon: {
    position: "absolute",
    top: 2,
    left: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_RED,
    width: "100%",
  },
  infoKey: {
    fontWeight: "bold",
    fontSize: 19,
    color: Colors.MAROON,
    flexShrink: 0,
    marginRight: 10,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    flex: 1,
    flexWrap: "wrap",
  },
  noMedicineText: {
    marginTop: 120,
    fontSize: 20,
    color: Colors.GRAY,
    fontWeight: "bold",
  },
});
