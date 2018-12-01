import React, { Component } from "react";
import { Animated } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Tab,
  Tabs,
  Thumbnail
} from "native-base";

import PerformanceView from "./performanceView";
import ChatCardView from "./ChatCardView";
import FeedCardView from "./feedCardView";

export default class Performance extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      progress: 0,
      loading: true
    };
  }

  componentDidMount() {
    // Animated.timing(this.animatedValue, {
    // toValue: 1,
    // duration: 500,
    // easing: Easing.linear
    // }).start();

    const interval = setInterval(() => {
      if (this.state.progress > 0.5) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 5
        };
      });
    }, 2000);
  }

  render() {
    const movingMarginTop = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 100, 150]
    });
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button transparent>
              <Icon name="md-arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "green" }}>Anwesh Mohapatra</Title>
          </Body>
          <Right style={{ backgroundColor: "white" }}>
            <Button
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                backgroundColor: "white"
              }}
            >
              <Thumbnail source={require("../assets/kid1.jpg")} />
            </Button>
          </Right>
        </Header>

        <Content>
          <Tabs>
            <Tab
              heading="Performance"
              tabStyle={{ backgroundColor: "white" }}
              activeTabStyle={{ backgroundColor: "white" }}
              textStyle={{ color: "green" }}
              activeTextStyle={{ color: "green", fontWeight: "bold" }}
            >
              <PerformanceView />
            </Tab>
            <Tab
              heading="Feed"
              tabStyle={{ backgroundColor: "white" }}
              activeTabStyle={{ backgroundColor: "white" }}
              textStyle={{ color: "green" }}
              activeTextStyle={{ color: "green", fontWeight: "bold" }}
            >
              <FeedCardView />
            </Tab>
            <Tab
              heading="Chat"
              tabStyle={{ backgroundColor: "white" }}
              activeTabStyle={{ backgroundColor: "white" }}
              textStyle={{ color: "green" }}
              activeTextStyle={{ color: "green", fontWeight: "bold" }}
            >
              <ChatCardView />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
