import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

const ListScreen = () => {
  const friends = [
    { name: "Friends #1", age: 32 },
    { name: "Friends #2", age: 22 },
    { name: "Friends #3", age: 27 },
    { name: "Friends #4", age: 43 },
    { name: "Friends #5", age: 12 },
    { name: "Friends #6", age: 25 },
    { name: "Friends #7", age: 24 },
    { name: "Friends #8", age: 20 },
    { name: "Friends #9", age: 22 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
