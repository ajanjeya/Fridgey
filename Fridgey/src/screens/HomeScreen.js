import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Text,
  disableYellowBox,
} from "react-native";
import Firebase from "../../config/Firebase";
import styled from "styled-components";
import HomeScreenCard from "../components/Card/HomeScreenCard";
import Menu from "../components/Menu/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}
console.disableYellowBox = true;

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("authenticationFlow");
  };
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    BudgetValue: "$100",
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  budgetCallback = (budgetValue) => {
    this.setState({ BudgetValue: budgetValue });
  };

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
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar source={require("../../assets/avatar.jpg")} />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>Johnavan</Name>
              </TitleBar>
              <Favourite>
                <Subtitle>Favourite Recipes</Subtitle>
                <ScrollView
                  horizontal={true}
                  style={{ paddingBottom: 30 }}
                  showsHorizontalScrollIndicator={false}
                >
                  {cards.map((card, index) => (
                    <HomeScreenCard
                      key={index}
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  ))}
                </ScrollView>
              </Favourite>
              <Subtitle>Budget</Subtitle>
              <Budget>
                <Text
                  style={{ color: "#4775f2", fontSize: 40, fontWeight: "600" }}
                >
                  {" "}
                  {this.state.BudgetValue}
                </Text>
              </Budget>
              <Subtitle>Inventory</Subtitle>
              <Budget>
                <Text
                  style={{ color: "#4775f2", fontSize: 40, fontWeight: "600" }}
                >
                  {" "}
                  13 items
                </Text>
              </Budget>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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

const Favourite = styled.View`
  flex: 1;
  padding-top: 20px;
`;

const Budget = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-left: 15px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  position: absolute;
  top: 0;
  left: 0;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const cards = [
  {
    title: "Salmon & Asparagus",
    image: require("../../assets/background15.jpg"),
    ingrediants:
      "Ingrediants \n 1 recipe pastry for a 9 inch double crust pie  \n½ cup unsalted butter \n3 tablespoons all-purpose flour \n¼ cup of water \n½ cup of white sugar \n½ cup packed brown sugar \n8 Granny Smith apples - peeled, cored and sliced",
  },
  {
    title: "Lemon Garlic Butter Chicken and Green Beans Skillet",
    image: require("../../assets/background16.jpg"),
    ingrediants:
      " Ingrediants \n 16 oz elbow macaroni, cooked (or other tubular pasta)\n1 tbsp extra virgin olive oil\n6 tbsp unsalted butter\n1/3 cup all purpose flour\n3 cups whole milk\n1 cup heavy whipping cream\n4 cups sharp cheddar cheese shredded\n2 cups Gruyere cheese shredded\nsalt and pepper to taste\n1 1/2 cups panko crumbs\n4 tbsp butter melted\n1/2 cup Parmesan cheese shredded\n1/4 tsp smoked paprika (or regular paprika)",
  },
];
