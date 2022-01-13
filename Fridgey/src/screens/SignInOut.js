import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import Firebase from "../../config/Firebase";

class SignInOut extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("authenticationFlow");
  };

  render() {
    return (
      <Container>
        <Text>Are you sure you want to sign out?</Text>

        <TouchableOpacity onPress={this.handleSignout}>
          <Text>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push("Home");
          }}
        >
          <Text>No</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
export default SignInOut;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
