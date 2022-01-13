import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, signup } from "../../actions/user";
import Firebase from "../../config/Firebase";
import styled from "styled-components";

class Signup extends React.Component {
  handleSignUp = () => {
    this.props.signup();
    this.props.navigation.navigate("applicationFlow");
  };

  render() {
    return (
      <View style={styles.container}>
        <LContainer>
          <SubText>Fridgey will help you:</SubText>
          <SubText> </SubText>
          <SubText>
            <Highlight>Find</Highlight> recipes
          </SubText>
          <SubText>
            <Highlight>Set</Highlight> monthy spending budgets
          </SubText>
          <SubText>
            <Highlight>Manage</Highlight> whats in your inventory
          </SubText>
        </LContainer>
        <TextInput
          style={styles.inputBox}
          value={this.props.user.email}
          onChangeText={(email) => this.props.updateEmail(email)}
          placeholder="Enter an email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.password}
          onChangeText={(password) => this.props.updatePassword(password)}
          placeholder="Enter a password with min. 6 characters"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#4775f2",
    borderColor: "#4775f2",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const SubText = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Highlight = styled.Text`
  color: #4775f2;
`;

const LContainer = styled.View`
  margin-bottom: 100px;
  align-items: center;
`;
