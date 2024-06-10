import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colours from "../config/colours";
import AppText from "./AppText";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {title}</AppText>
        <AppText style={styles.subtitle}> {subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colours.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBotton: 7,
  },
  subtitle: {
    color: colours.secondary,
    fontWeight: "bold",
  },
});
export default Card;
