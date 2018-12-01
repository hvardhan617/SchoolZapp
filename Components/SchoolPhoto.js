/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, Image, View } from "react-native";

import {
  Icon,
  Body,
  Left,
  Content,
  Thumbnail,
  Right,
  Button,
  Text,
  Card,
  CardItem
} from "native-base";

export default class SchoolDetails extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/schoollogo.png")}
          />
          <Body>
            <Text style={{ paddingLeft: 7 }}>Delhi Public School</Text>
            <Text note style={{ paddingLeft: 7 }}>
              C.B.S.E | English | Co-ed
            </Text>
          </Body>

          <Text>3.8/5</Text>

          <Icon name="star-half" style={{ paddingLeft: 6 }} />
        </CardItem>
        <CardItem style={{ paddingTop: 1, paddingBottom: 1 }}>
          <Left>
            <Button transparent>
              <Icon active name="md-pin" />
            </Button>
            <Text>Nalconagar, Angul, Odisha, 759145</Text>
          </Left>
        </CardItem>
        <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Left>
            <Button transparent>
              <Icon active name="md-call" />
            </Button>
            <Text>+91 9437188537, +91 764362736</Text>
          </Left>
        </CardItem>
        <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Left>
            <Button transparent>
              <Icon active name="globe" />
            </Button>
            <Text>https://www.dpsnalconagar.com</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
