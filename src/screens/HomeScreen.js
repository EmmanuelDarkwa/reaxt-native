import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {

  return (
     <View>
    <Text style={styles.text}>
    Warmed UP Fitness App
    Get in the best shape of your life today!

    SignUp here!
    Get awesome videos  and diet plans on your mobile device!
  </Text>
    <Button 
    onPress={() => props.navigation.navgate('Components')}
    title="Click here"
    />
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to list Demo</Text>
    </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'teal',
    backgroundColor: 'black'
  },
});

export default HomeScreen;
