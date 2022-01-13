import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";
import HomeScreen from "../../screens/HomeScreen";
import BudgetScreen from "../../screens/BudgetScreen";
import InventoryScreen from "../../screens/InventoryScreen";
import RecipeScreen from "../../screens/RecipeScreen";
import TabNavigator from "./TabNavigator";
import RecipeFullCard from "../../screens/RecipeFullCard";
import RecipeTest from "../Recipe/RecipeTest";
import SignInOut from "../../screens/SignInOut";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
    Inventory: InventoryScreen,
    Recipe: RecipeScreen,
    RecipeFull: RecipeFullCard,
    RecipeComponent: RecipeTest,
    InOut: SignInOut,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(TabNavigator);
