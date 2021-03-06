import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import ChildCard from "../Components/MyChildren";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Tab,
  Tabs,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
export default class MyChildrenView extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("MultiTabView2", {
            navigation: this.props.navigation
          })
        }
      >
        <ChildCard />
      </TouchableOpacity>
    );
  }
}
