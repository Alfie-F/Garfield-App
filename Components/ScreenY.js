import * as React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenY(navigation, route) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Non nostrum illo cum reiciendis dolore eos quia fugit eos earum
        similique nam sunt fuga. Est minus galisum ut omnis laboriosam est eius
        mollitia sed blanditiis ullam et earum corrupti nam voluptas
        exercitationem. Rem totam aliquid et quaerat expedita nam enim
        distinctio hic galisum illo in repellendus nemo ut dolor aspernatur. Qui
        voluptatem perferendis non aliquid explicabo ea fugiat ducimus sit nisi
        ipsa est obcaecati consequatur ut quidem facilis ut adipisci repellat.
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
});