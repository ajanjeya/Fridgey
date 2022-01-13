import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import BudgetInput from "../components/Budget/BudgetInput";
import styled from "styled-components";

const BudgetScreen = () => {
  const [budget, setBudget] = useState(0);
  const [spending, setSpending] = useState(0);

  updateBudget = (budget) => {
    this.props.budgetCallback(budget);
    this.setState({ budget });
  };

  return (
    <View>
      <FContainer>
        <Container>
          <Text
            style={{
              color: "#4775f2",
              fontWeight: "600",
              fontSize: 15,
              paddingTop: 20,
              paddingBottom: 20,
              marginLeft: 10,
            }}
          >
            Enter a monthly budget
          </Text>
          <Wrapper>
            <BudgetInput
              budget={budget}
              onBudgetChange={(newBudget) => setBudget(newBudget)}
              display="Budget"
            />
          </Wrapper>

          <Text
            style={{
              color: "#4775f2",
              fontWeight: "600",
              fontSize: 15,
              paddingTop: 20,
              paddingBottom: 20,
              marginLeft: 10,
            }}
          >
            Enter how much you spent
          </Text>
          <Wrapper>
            <BudgetInput
              budget={spending}
              onBudgetChange={(newSpending) => setSpending(newSpending)}
              onBudgetSubmit={() => setBudget(budget - spending)}
              display="Spent on Food"
            />
          </Wrapper>
          <Text
            style={{
              color: "#4775f2",
              fontWeight: "600",
              fontSize: 30,
              paddingTop: 60,
              paddingBottom: 20,
              marginLeft: 30,
            }}
          >
            Remaining Budget: {budget}
          </Text>
        </Container>
      </FContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BudgetScreen;

const Container = styled.View`
  background: white;
  width: 370px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const FContainer = styled.View`
  justify-content: center;
  padding-top: 120px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;
