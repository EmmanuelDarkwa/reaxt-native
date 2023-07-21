import React from "react";
import { Text, StyleSheet, View } from 'react-native' ;

const ComponentsScreen = () => {
    const Name = "Emmanuel";
  return(
    <View>
   <Text style={styles.textStyle}>
   Getting started with react native
    </Text>  
    <Text style={styles.subHeaderStyle}>My name is {Name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30, 
    },
    subHeaderStyle: {
        fontSize: 20
    }
});
export default ComponentsScreen