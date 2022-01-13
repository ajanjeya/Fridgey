import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk"
import AppNavigation from "./src/components/Navigation/AppNavigation";
import reducer from "./reducers"

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
