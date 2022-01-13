import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function BudgetHistorical(props) {
  return (
    <View style={styles.container}>
      <Icon name="arrow-with-circle-left" style={styles.icon}></Icon>
      <Text style={styles.historicalMonths}>Historical Months</Text>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}></Text>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(84,20,209,1)",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 22,
    marginLeft: 311,
  },
  historicalMonths: {
    color: "rgba(239,239,241,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 39,
    marginLeft: 26,
  },
  loremIpsum: {
    top: 0,
    left: 75,
    color: "rgba(41,14,202,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "alef-regular",
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 310,
    height: 524,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
  },
  scrollArea_contentContainerStyle: {
    width: 310,
    height: 524,
  },
  loremIpsumStack: {
    width: 310,
    height: 524,
    marginTop: 35,
    marginLeft: 32,
  },
});

export default BudgetHistorical;
