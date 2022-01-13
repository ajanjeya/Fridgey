import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Modal } from "react-native";

const InventoryDeletion = props => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputHandler = enteredText => {
    setEnteredName(enteredText);
  };

  const [enteredQuantity, setEnteredQuantity] = useState("");
  const quantityInputHandler = enteredText => {
    setEnteredQuantity(parseInt(enteredText));
  };

  const [isDeleteMode, setDeleteMode] = useState(props.visible); //not used

  return (
    <Modal
      visible={props.visible}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View>
        <TextInput
          placeholder="Enter item to be removed"
          placeholderTextColor="black"
          onChangeText={nameInputHandler}
          value={enteredName}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
        <TextInput
          placeholder="Enter item quantity to be removed"
          placeholderTextColor="black"
          onChangeText={quantityInputHandler}
          value={enteredQuantity}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
        <Button
          title="Delete"
          onPress={() =>
            props.onDeleteItem({ name: enteredName, quantity: enteredQuantity })
          }
        />
        <Button title="Return" onPress={() => props.setDeleteMode(false)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});
export default InventoryDeletion;
