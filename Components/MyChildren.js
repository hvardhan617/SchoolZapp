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

export default class ChildCard extends Component {
  render() {
    return (
      <Content padder>
        <Card
          style={{
            borderRadius: 8,
            overflow: "hidden",
            flexDirection: "row",
            flex: 10
          }}
        >
          <View style={{ backgroundColor: "#28A885", width: 20 }} />
          <View>
            <CardItem>
              <Left>
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <Thumbnail source={require("../assets/kid1.jpg")} />
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
                  <Text
                    style={{ fontSize: 11, color: "#9A9090", marginTop: 10 }}
                  >
                    Attendance
                  </Text>
                </Button>
                <Button transparent style={{ flexDirection: "column" }}>
                  <Icon
                    active
                    name="chatbubbles"
                    style={{ color: "#EEAA0E" }}
                  />
                  <Text style={{ fontSize: 11, color: "#9A9090" }}>
                    Performance
                  </Text>
                </Button>
                <Button transparent style={{ flexDirection: "column" }}>
                  <Icon
                    active
                    name="chatbubbles"
                    style={{ color: "#EEAA0E" }}
                  />
                  <Text style={{ fontSize: 11, color: "#9A9090" }}>
                    Messages
                  </Text>
                </Button>
                <Button transparent style={{ flexDirection: "column" }}>
                  <Icon
                    active
                    name="md-notifications"
                    style={{ color: "#EEAA0E" }}
                  />
                  <Text style={{ fontSize: 11, color: "#9A9090" }}>Feed</Text>
                </Button>
              </View>
            </CardItem>
          </View>
        </Card>
      </Content>
    );
  }
}
