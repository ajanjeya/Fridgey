import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function BudgetMain(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum1}>Current Monthly Budget</Text>
      <Text style={styles.loremIpsum2}>
        &lt;$0.00&gt; / &lt;$0.00&gt; Spent This Week
      </Text>
      <Text style={styles.loremIpsum3}>Money Wasted This Week:</Text>
      <Text style={styles.loremIpsum4}>Money Saved This Week:</Text>
      <View style={styles.rect1}></View>
      <Text style={styles.budgetName1}>&lt;Budget Name&gt;</Text>
      <Text style={styles.loremIpsum5}>
        &lt;$0.00&gt; / &lt;$0.00&gt; Spent This Week
      </Text>
      <Text style={styles.loremIpsum6}>
        &lt;$0.00&gt; / &lt;$0.00&gt; Spent This Week
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(84,20,209,1)",
  },
  loremIpsum1: {
    color: "rgba(243,238,238,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 372,
    marginLeft: 19,
  },
  loremIpsum2: {
    color: "rgba(25,232,72,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 241,
    marginLeft: 24,
  },
  loremIpsum3: {
    color: "rgba(228,224,224,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -166,
    marginLeft: 24,
  },
  loremIpsum4: {
    color: "rgba(245,240,240,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 95,
    marginLeft: 24,
  },
  rect1: {
    width: 242,
    height: 240,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -573,
    alignSelf: "center",
  },
  budgetName1: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 17,
    marginLeft: 117,
  },
  loremIpsum5: {
    color: "rgba(25,232,72,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 212,
    marginLeft: 24,
  },
  loremIpsum6: {
    color: "rgba(25,232,72,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: -132,
    marginLeft: 19,
  },
});

export default BudgetMain;
