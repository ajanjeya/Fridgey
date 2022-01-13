import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import styled from "styled-components";
import Menu from "../components/Menu/Menu";
import { connect } from "react-redux";
import RecipeTest from "../components/Recipe/RecipeTest";
import Search from "../components/Search/Search";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class RecipeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    SearchString: null,
  };

  filterCallback = (filter) => {
    this.setState({ Filter: filter });
  };

  searchCallback = (searchString) => {
    this.setState({ SearchString: searchString });
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />

        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <Search
                searchCallback={this.searchCallback}
                filterCallback={this.filterCallback}
              ></Search>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <RecipeTest
                  query={this.state.SearchString}
                  category={this.state.Filter}
                />
              </ScrollView>
              <Subtitle>Recommended Recipes</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <RecipeTest query={"random"} />
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
