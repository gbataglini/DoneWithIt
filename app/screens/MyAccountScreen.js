import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colours from "../config/colours";
import Icon from "../components/Icon";

function MyAccountScreen(props) {
  const userDetails = {
    name: "Charlie Kelly",
    email: "charlie@paddyspub.com",
    profilePicture: require("../assets/charlie.jpg"),
  };

  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colours.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colours.secondary,
      },
    },
  ];
  return (
    <Screen style={styles.itemBackground}>
      <View style={styles.menuItem}>
        <ListItem
          title={userDetails.name}
          subtitle={userDetails.email}
          image={userDetails.profilePicture}
        />
      </View>

      <View style={styles.menuList}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.menuItem}>
        <ListItem
          title={"Log Out"}
          IconComponent={
            <Icon name="logout" backgroundColor={colours.yellow} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  itemBackground: {
    backgroundColor: colours.light,
  },
  menuItem: {
    backgroundColor: colours.white,
  },
  menuList: {
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: colours.white,
  },
});

export default MyAccountScreen;
