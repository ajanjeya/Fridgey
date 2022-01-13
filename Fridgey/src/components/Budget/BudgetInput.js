import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const budgetInput = ({ budget, onBudgetChange, onBudgetSubmit }) => {
  return (
    <View>
      <TextInput
        keyboardType="numeric"
        value={budget}
        onChangeText={onBudgetChange}
        onEndEditing={onBudgetSubmit}
        placeholder="Budget"
      />
    </View>
  );
};

export default budgetInput;
