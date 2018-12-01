import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
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
  Icon,
  Text
} from "native-base";

export default class TestScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="cloud-upload" style={{ fontSize: 24, color: tintColor }} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Text>Test Screen</Text>;
  }
}
