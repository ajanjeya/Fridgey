import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

function CreateBudget(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.createNewBudget}>Create New Budget</Text>
      <View style={styles.rect1}></View>
      <View style={styles.budgetNameRow}>
        <Text style={styles.budgetName}>Budget Name:</Text>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.budgetAmountRow}>
        <Text style={styles.budgetAmount}>Budget Amount:</Text>
        <View style={styles.rect5}></View>
      </View>
      <Text style={styles.selectedMonths}>Selected Months:</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        ></ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(84,20,209,1)",
  },
  createNewBudget: {
    color: "rgba(247,244,244,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 67,
    marginLeft: 102,
  },
  rect1: {
    width: 242,
    height: 240,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 25,
    alignSelf: "center",
  },
  budgetName: {
    color: "rgba(244,243,249,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
  },
  rect2: {
    width: 164,
    height: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 68,
  },
  budgetNameRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 12,
    marginRight: 15,
  },
  budgetAmount: {
    color: "rgba(234,232,243,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
  },
  rect5: {
    width: 164,
    height: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 35,
  },
  budgetAmountRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 12,
    marginRight: 15,
  },
  selectedMonths: {
    color: "rgba(238,237,245,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 30,
    marginLeft: 85,
  },
  scrollArea: {
    width: 316,
    height: 202,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 17,
    alignSelf: "center",
  },
  scrollArea_contentContainerStyle: {
    width: 316,
    height: 202,
  },
});

export default CreateBudget;
