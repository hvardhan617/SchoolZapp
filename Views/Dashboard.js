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
          <Card button onPress={() => alert("Clicked Card")}>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://www.podareducation.org/Uploads/Campus/2013-6-8--12-5-38-227_sampleschoolbuilding.jpg"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://www.podareducation.org/Uploads/Campus/2013-6-8--12-5-38-227_sampleschoolbuilding.jpg"
                  }}
                />
                <Body>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text>DAV Public School,Angul</Text>
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
                        <Text>4.8/5</Text>
                      </View>

                      <View>
                        <Icon name="md-star" />
                      </View>
                    </View>
                  </View>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
