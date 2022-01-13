import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";

function BudgetOptions(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.budgetingOptions}>Budgeting Options</Text>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.iconRow}>
        <EntypoIcon name="credit" style={styles.icon}></EntypoIcon>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon name="block" style={styles.icon2}></EntypoIcon>
        <MaterialButtonViolet1
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet1>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon
          name="arrow-with-circle-left"
          style={styles.icon3}
        ></EntypoIcon>
        <EntypoIcon
          name="arrow-with-circle-left"
          style={styles.icon4}
        ></EntypoIcon>
      </View>
      <View style={styles.icon6Row}>
        <EntypoIcon
          name="controller-fast-backward"
          style={styles.icon6}
        ></EntypoIcon>
        <MaterialButtonViolet2
          style={styles.materialButtonViolet2}
        ></MaterialButtonViolet2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(84,20,209,1)",
  },
  budgetingOptions: {
    color: "rgba(247,244,244,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 118,
    marginLeft: 15,
  },
  loremIpsum: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -32,
    marginLeft: 75,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  materialButtonViolet: {
    width: 255,
    height: 36,
    marginLeft: 13,
    marginTop: 4,
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 96,
    marginLeft: 15,
    marginRight: 52,
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  materialButtonViolet1: {
    width: 255,
    height: 36,
    marginLeft: 13,
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 15,
    marginRight: 52,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 380,
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -315,
    marginLeft: 314,
    marginRight: -360,
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  materialButtonViolet2: {
    width: 255,
    height: 36,
    marginLeft: 13,
  },
  icon6Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 325,
    marginLeft: 15,
    marginRight: 52,
  },
});

export default BudgetOptions;
