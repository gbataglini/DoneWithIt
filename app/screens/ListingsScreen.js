import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colours from "../config/colours";

function ListingsScreen(props) {
  const listings = [
    {
      id: 1,
      title: "Red Jacket for Sale",
      price: "100",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Sofa in great condition ",
      price: "1200",
      image: require("../assets/couch.jpg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"£" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colours.light,
    height: "100%",
  },
});
export default ListingsScreen;
