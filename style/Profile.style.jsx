import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  userInfoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  userImage: {
    height: 130,
    width: 130,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: Colors.RED,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});
