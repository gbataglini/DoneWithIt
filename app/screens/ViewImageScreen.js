import React from "react";
import { StyleSheet, Image, View, SafeAreaView } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignContent: "space-around",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },

  closeButton: {
    backgroundColor: "#4ECDC4",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    backgroundColor: "#fc5c65",
    width: 40,
    height: 40,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
