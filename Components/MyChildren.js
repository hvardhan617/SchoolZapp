/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
//import Performance from "./Performance";

export default class ChildCard extends Component {
  render() {
    return (
      <Card style={{ flexDirection: "row", flex: 10 }}>
        <View style={{ backgroundColor: "red", width: 20 }} />
        <View>
          <CardItem>
            <Left>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <Thumbnail
                  source={{
                    uri:
                      "https://www.podareducation.org/Uploads/Campus/2013-6-8--12-5-38-227_sampleschoolbuilding.jpg"
                  }}
                />
                <Text>Harsha</Text>
              </View>

              <Body>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text>DAV Public School,Angul</Text>
                    <Text note>Class 1 | Sec A</Text>
                    <Text note>Roll No 34</Text>
                  </View>
                </View>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Button transparent style={{ flexDirection: "column" }}>
                <Text>82%</Text>
                <Text>Attendance</Text>
              </Button>
              <Button transparent style={{ flexDirection: "column" }}>
                <Icon active name="chatbubbles" />
                <Text>Performance</Text>
              </Button>
              <Button transparent style={{ flexDirection: "column" }}>
                <Icon active name="chatbubbles" />
                <Text>Messages</Text>
              </Button>
              <Button transparent style={{ flexDirection: "column" }}>
                <Icon active name="chatbubbles" />
                <Text>Feed</Text>
              </Button>
            </View>
          </CardItem>
        </View>
      </Card>
    );
  }
}
