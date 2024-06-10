import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
