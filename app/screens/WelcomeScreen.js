import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#fc5c65",
    height: 70,
  },
  registerButton: {
    width: "100%",
    backgroundColor: "#4ECDC4",
    height: 70,
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
