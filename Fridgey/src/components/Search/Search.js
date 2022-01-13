import React from "react";
import { Button, View } from "react-native";
import { SearchBar } from "react-native-elements";

class Search extends React.Component {
  state = {
    search: "",
    e: "",
  };

  updateSearch = (search) => {
    this.props.searchCallback(search);
    this.setState({ search });
  };

  handleFilter = (e) => {
    this.props.filterCallback(e);
    this.setState({ e });
  };

  render() {
    const { search } = this.state;
    return (
      <View>
        <View>
          <SearchBar
            containerStyle={{
              backgroundColor: "transparent",
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
              flex: 1,
            }}
            inputContainerStyle={{
              backgroundColor: "#EDEDED",
            }}
            inputStyle={{
              backgroundColor: "#EDEDED",
              borderRadius: 10,
              color: "black",
            }}
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>

        <View style={{ flexDirection: "row", paddingLeft: 10 }}>
          <Button
            title="None"
            value="none"
            onPress={() => this.handleFilter("none")}
          ></Button>
          <Button
            title="Veg"
            value="veg"
            onPress={() => this.handleFilter("vegetarian")}
          ></Button>
          <Button
            title="Vegan"
            value="vegan"
            onPress={() => this.handleFilter("vegan")}
          ></Button>
          <Button
            title="Low-Carb"
            value="low-Carb"
            onPress={() => this.handleFilter("low-carb")}
          ></Button>
          <Button
            title="High-Protein"
            value="high-protein"
            onPress={() => this.handleFilter("high-protein")}
          ></Button>
        </View>
      </View>
    );
  }
}

export default Search;
