import React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import Card from "../Card/Card";

const API =
  "https://api.edamam.com/search?app_id=0bde13c9&app_key=5150ef5ab2269f2e51211db77380222d&q=";

var URI;

class RecipeTest extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }
  queryBuilder() {
    URI = API;
    if (this.props.query) {
      URI = URI + this.props.query;
    } else {
      URI = URI + "";
    }
    if (this.props.category) {
      if (
        this.props.category === "vegetarian" ||
        this.props.category === "vegan"
      ) {
        URI = URI + "&health=" + this.props.category;
      }
      if (
        this.props.category === "low-carb" ||
        this.props.category === "high-protein"
      ) {
        URI = URI + "&diet=" + this.props.category;
      }
      if (this.props.category === "none") {
      }
    }
    console.log(URI);
    return URI;
  }

  fetch() {
    var query = this.queryBuilder();

    fetch(query)
      .then((response) => response.json())
      .then((data) => this.setState({ hits: data.hits }));
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.query !== prevProps.query ||
      this.props.category !== prevProps.category
    ) {
      this.fetch();
    }
  }
  render() {
    const { hits } = this.state;
    return hits.map((hit) => (
      <TouchableOpacity
        key={hit.recipe.label}
        onPress={() => {
          this.props.navigation.push("RecipeFull", {
            recipeFull: hit,
          });
        }}
      >
        <Card
          key={hit.recipe.label}
          title={hit.recipe.label}
          image={{ uri: hit.recipe.image }}
          ingrediants={hit.recipe.ingrediantLines}
        />
      </TouchableOpacity>
    ));
  }
}

export default withNavigation(RecipeTest);
