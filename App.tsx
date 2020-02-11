import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { createStore } from "redux";
import styled from "styled-components";
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen'

const initialState = {
  action: ""
}
const reducer = (state = initialState, action) => {
  if (action.type === 'CLOSE_MENU') {
    return { action: "closeMenu" }
  } else if (action.type === "OPEN_MENU") {
    return { action: "openMenu" }
  }
  return state
}

const store = createStore(reducer);


const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
)


export default App;
