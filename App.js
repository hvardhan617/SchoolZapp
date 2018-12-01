/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from "react";
// import Login from "./Views/Login";
// import FiltersView from "./Views/filtersView";
// import AdmissionFormView from "./Views/AdmissionFormView";
// import SchoolDetails from "./Views/SchoolDetails";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return <SchoolDetails />;
//   }
// }

import React from "react";
import MultiTabView from "./Views/MultiTabView";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import FiltersView from "./Views/filtersView";
import AdmissionFormView from "./Views/AdmissionFormView";
import SchoolDetails from "./Views/SchoolDetails";
import MyChildrenView from "./Views/MyChildrenView";
import TestScreen from "./Views/TestScreen";
import ExamPerformance from "./Components/ExamPerformance";
import Performance from "./Views/Performance";
import MultiTabView2 from "./Views/MultiTabView2";
import performanceView from "./Views/performanceView";
import ChatCardView from "./Views/ChatCardView";
import feedCardView from "./Views/feedCardView";

const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={{ height: 200 }}>
      <Body />
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);
const Nav = createDrawerNavigator(
  {
    Dashboard: {
      screen: MultiTabView
    },
    Test: {
      screen: TestScreen
    }
  },
  {
    initialRouteName: "Dashboard",
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: Login,
    MultiTabView: MultiTabView,
    MultiTabView2: MultiTabView2,
    Filter: FiltersView,
    Admission: AdmissionFormView,
    Details: SchoolDetails,
    Children: MyChildrenView,
    AppNavigator: Nav,
    Performance: Performance,
    performanceView: performanceView,
    ChatCardView: ChatCardView,
    feedCardView: feedCardView
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
