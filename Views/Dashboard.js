import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";

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

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Details", {
              navigation: this.props.navigation
            })
          }
        >
          <Content padder>
            <Card style={{ borderRadius: 8, overflow: "hidden" }}>
              <CardItem cardBody>
                <Image
                  source={require("../assets/school.png")}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../assets/schoollogo.png")}
                  />
                  <Body>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Text>Delhi Public School</Text>
                        <Text note>5 seats available</Text>
                        <Text note>15 people applied in the past 1 month</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          alignItems: "center"
                        }}
                      >
                        <View>
                          <Text>4.5/5</Text>
                        </View>

                        <View>
                          <Icon name="md-star" style={{ marginLeft: 5 }} />
                        </View>
                      </View>
                    </View>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card style={{ borderRadius: 8, overflow: "hidden" }}>
              <CardItem cardBody>
                <Image
                  source={require("../assets/school2.jpg")}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../assets/schoollogo2.jpg")}
                  />
                  <Body>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Text>DAV Chandrashekharpur</Text>
                        <Text note>15 seats available</Text>
                        <Text note>35 people applied in the past 1 month</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          alignItems: "center"
                        }}
                      >
                        <View>
                          <Text>3.5/5</Text>
                        </View>

                        <View>
                          <Icon name="md-star" style={{ marginLeft: 5 }} />
                        </View>
                      </View>
                    </View>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </TouchableOpacity>
      </View>
    );
  }
}
