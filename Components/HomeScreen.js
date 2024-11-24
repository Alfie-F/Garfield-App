import * as React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
let day = days[date.getDay()];
let check = "does";
let words = "Huzzah what wonderful news!";
if (day === "Monday") {
  check = "does not";
  words = "better luck tomorrow.";
}
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.maintext}>
        {" "}
        Today it is {day}! This means that our dear old Garf {check} like today!{" "}
        {words}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.text}>About</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("TabNav")}
      >
        <Text style={styles.text}>Tab Nav Widgets</Text>
      </Pressable>
      <Image
        style={styles.Image}
        source={require("../assets/Garf.png")}
      ></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: { windowWidth },
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#edab7d",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    // position: "absolute",
    width: windowWidth,
    aspectRatio: 1.68 / 1,
    resizeMode: "contain",
    // top: windowHeight - windowWidth * 1.68,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: 20,
    height: 50,
    width: "30%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "orange",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  maintext: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    width: "100%",
    textAlign: "center",
    paddingHorizontal: "20%",
    paddingTop: 20,
    flexGrow: 1,
    minWidth: 0,
    height: "auto",
  },
});
