import React, { Component } from "react";
import { View, Image, Animated, Easing, StyleSheet } from "react-native";
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
import BarGraph from "./BarGraph";
import AnimateNumber from "react-native-animate-number";

export default class Performance extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
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
        <Header>
          <Left>
            <Button transparent>
              <Icon name="md-arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>Anwesh Mohapatra</Title>
          </Body>
          <Right>
            <Button
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <Thumbnail
                source={{
                  uri:
                    "https://www.podareducation.org/Uploads/Campus/2013-6-8--12-5-38-227_sampleschoolbuilding.jpg"
                }}
              />
            </Button>
          </Right>
        </Header>

        <Content>
          <Tabs>
            <Tab heading="Performance">
              <Tab />
            </Tab>
            <Tab heading="Feed">
              <Tab />
            </Tab>
            <Tab heading="Chat">
              <Tab />
            </Tab>
          </Tabs>
          <Card>
            <CardItem style={{ backgroundColor: "red" }}>
              <Text>Exam Performance</Text>
            </CardItem>
            <CardItem style={{ flexDirection: "column" }}>
              <Text>Attendance</Text>
              <AnimateNumber
                value={75}
                countBy={3}
                timing={(interval, progress) => {
                  // slow start, slow end
                  return interval * (1 - Math.sin(Math.PI * progress)) * 2;
                }}
              />
              <BarGraph
                progress={this.state.progress}
                height={15}
                borderColor="#DDD"
                fillColor="white"
                barColor="red"
                borderRadius={3}
                style={{ transform: [{ rotate: "-90deg" }] }}
              />
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Text>Filters</Text>
            </Button>
            <Button vertical>
              <Text>Sort</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
