import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Alert
} from "react-native";
import InventoryDeletion from "../screens/InventoryDeletion";
import DatePicker from "react-native-datepicker";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const InventoryScreen = () => {
  const [itemList, addToList] = useState([]); //itemList is our main list of items to add and delete from

  const [enteredName, setEnteredName] = useState(""); //input for item name
  const nameInputHandler = enteredText => {
    setEnteredName(enteredText);
  };

  const [enteredQuantity, setEnteredQuantity] = useState(""); //input for item quantity
  const quantityInputHandler = enteredText => {
    setEnteredQuantity(parseInt(enteredText));
  };

  const [enteredPrice, setEnteredPrice] = useState(""); // input for item price
  const priceInputHandler = enteredText => {
    setEnteredPrice(enteredText);
  };

  const [enteredExpiry, setEnteredExpiry] = useState(new Date()); //input for item expiry
  const expiryInputHandler = date => {
    setEnteredExpiry(date);
  };

  const addItemHandler = () => {
    const item = {
      name: enteredName,
      quantity: enteredQuantity,
      price: enteredPrice,
      expiry: enteredExpiry,
      expired: false
    };
    var i;
    for (i = 0; i < itemList.length; i++) {
      if (itemList[i].name == item.name && itemList[i].expiry === item.expiry) {
        itemList[i].quantity += item.quantity;
        break;
      }
    }
    if (i == itemList.length) {
      addToList([...itemList, item]);
    }
  };

  const [isDeleteMode, setDeleteMode] = useState(false);

  const deleteItemHandler = item => {
    for (var i = 0; i < itemList.length; i++) {
      if (
        itemList[i].name == item.name &&
        itemList[i].quantity < item.quantity
      ) {
        Alert.alert("Oops", "Quantity higher than amount", [{ text: "Okay" }]);
        break;
      } else if (
        itemList[i].name == item.name &&
        itemList[i].quantity == item.quantity
      ) {
        Alert.alert("", "Item Deleted", [{ text: "Okay" }]);
        addToList(itemList => {
          return itemList.filter(groceryItem => groceryItem.name != item.name);
        });
      } else if (
        itemList[i].name == item.name &&
        itemList[i].quantity > item.quantity
      ) {
        Alert.alert("", "Item Deleted", [{ text: "Okay" }]);
        itemList[i].quantity -= item.quantity;
      }
    }
  };

  const foodNumber = () => itemList.length();

  return (
    <View>
      <Text>{foodNumber}</Text>
      <InventoryDeletion
        visible={isDeleteMode}
        onDeleteItem={deleteItemHandler}
        setDeleteMode={setDeleteMode}
      />
      <Container>
        <Text
          style={{
            color: "#4775f2",
            fontWeight: "600",
            fontSize: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 20
          }}
        >
          {" "}
          Add a item
        </Text>
        <SearchFieldContainer>
          <TextInput
            placeholder="Enter item name"
            placeholderTextColor="black"
            onChangeText={nameInputHandler}
            value={enteredName}
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          />
          <TextInput
            placeholder="Enter item quantity"
            placeholderTextColor="black"
            onChangeText={quantityInputHandler}
            value={enteredQuantity}
            keyboardType="numeric"
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          />
          <TextInput
            placeholder="Enter item price"
            placeholderTextColor="black"
            onChangeText={priceInputHandler}
            value={enteredPrice}
            keyboardType="numeric"
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          />
          <DatePicker
            style={styles.viewScreen}
            date={enteredExpiry}
            mode="date"
            placeholder="Select Expiry Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={(styles.dateIcon, styles.dateInput)}
            onDateChange={date => {
              expiryInputHandler(date);
            }}
          />
          <Ionicons
            name="ios-add"
            size={40}
            color="#546bfb"
            style={{ paddingLeft: 300 }}
            onPress={addItemHandler}
          />
        </SearchFieldContainer>
      </Container>
      <Button title="Delete" onPress={() => setDeleteMode(true)} />

      <Text
        style={{
          color: "#4775f2",
          fontWeight: "600",
          fontSize: 20,
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: 20
        }}
      >
        {" "}
        Inventory list
      </Text>
      <FlatList
        keyExtractor={(item, index) => item.name}
        data={itemList}
        extraData={itemList.state}
        renderItem={itemData => (
          <View>
            <Text style={{ marginLeft: 20 }}>
              {itemData.item.name +
                " " +
                itemData.item.quantity +
                " " +
                itemData.item.price +
                " " +
                itemData.item.expiry}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewScreen: { width: 200 },
  dateIcon: {
    position: "absolute",
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  }
});

export default InventoryScreen;

const Container = styled.View`
  background: white;
  width: 370px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const SearchFieldContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
`;
