import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

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
  Thumbnail,
  List,
  ListItem
} from "native-base";
import BarGraph from "./BarGraph";
export default class ExamPerformance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // Animated.timing(this.animatedValue, {
    //   toValue: 1,
    //   duration: 500,
    //   easing: Easing.linear
    // }).start();

    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 1
        };
      });
    }, 200);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem style={{ backgroundColor: "#71c4ad" }}>
              <Text>Grades</Text>
            </CardItem>
            <CardItem style={{ flexDirection: "row" }}>
              <Left>
                <Text>Midterm: 80%</Text>
              </Left>

              <Right style={{ flexDirection: "column" }}>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start"
                    }}
                  >
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 100 / 2,
                        backgroundColor: "red"
                      }}
                    />
                    <Text style={{ marginLeft: 5 }}>Avg Class Performance</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start"
                    }}
                  >
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 100 / 2,
                        backgroundColor: "yellow"
                      }}
                    />
                    <Text style={{ marginLeft: 5 }}>Your Performance</Text>
                  </View>
                </View>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Maths</Text>
              </Left>
              <Right>
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="red"
                  borderRadius={3}
                  style={{ width: 157 }}
                />
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="yellow"
                  borderRadius={3}
                  style={{ width: 87 }}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Science</Text>
              </Left>
              <Right>
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="red"
                  borderRadius={3}
                  style={{ width: 127 }}
                />
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="yellow"
                  borderRadius={3}
                  style={{ width: 107 }}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Social</Text>
              </Left>
              <Right>
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="red"
                  borderRadius={3}
                  style={{ width: 95 }}
                />
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="yellow"
                  borderRadius={3}
                  style={{ width: 135 }}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Computers</Text>
              </Left>
              <Right>
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="red"
                  borderRadius={3}
                  style={{ width: 117 }}
                />
                <BarGraph
                  progress={this.state.progress}
                  height={15}
                  borderColor="white"
                  fillColor="white"
                  barColor="yellow"
                  borderRadius={3}
                  style={{ width: 105 }}
                />
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
