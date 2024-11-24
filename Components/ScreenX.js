import * as React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenX(navigation, route) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet. Quo quas recusandae quo expedita dicta et
        odio voluptas in laboriosam velit et veniam necessitatibus At
        necessitatibus repellat. Sed dolores laborum aut neque expedita ut
        suscipit culpa in quod nisi ut optio ipsa ut ipsum ducimus.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#edab7d",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  text: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
});
