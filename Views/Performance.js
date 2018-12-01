import React, { Component } from "react";
import {
  View,
  Image,
  Animated,
  Easing,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
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
import BarGraph from "./BarGraph.js";
import AnimateNumber from "react-native-animate-number";

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
          <Content padder>
            <Card style={{ borderRadius: 8, overflow: "hidden" }}>
              <CardItem
                header
                bordered
                style={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  backgroundColor: "#71c4ad"
                }}
              >
                <Text style={{ color: "white", fontWeight: "900" }}>
                  Class Performance
                </Text>
              </CardItem>
              <CardItem>
                <View
                  style={{
                    flexDirection: "column",
                    flex: 0.5,
                    marginLeft: 60
                  }}
                >
                  <Text
                    style={{ color: "grey", fontWeight: "700", fontSize: 12 }}
                  >
                    Attendance
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <AnimateNumber
                      style={{ color: "green", fontSize: 30 }}
                      value={82}
                      countBy={3}
                      timing={(interval, progress) => {
                        // slow start, slow end
                        return (
                          interval * (1 - Math.sin(Math.PI * progress)) * 2
                        );
                      }}
                    />
                    <Text style={{ color: "green", fontSize: 30 }}>%</Text>
                  </View>
                  <Text style={{ color: "gray", fontSize: 10 }}>136 Days</Text>
                </View>
                <View style={{ flexDirection: "column", flex: 0.5 }}>
                  <Text
                    style={{ color: "grey", fontWeight: "700", fontSize: 12 }}
                  >
                    Punctuality
                  </Text>
                  <ImageBackground
                    source={require("../assets/pie-chart.png")}
                    style={{
                      height: 45,
                      width: 45,
                      marginTop: 6,
                      marginBottom: 3
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 22,
                        marginLeft: 20,
                        fontSize: 12,
                        color: "white"
                      }}
                    >
                      75%
                    </Text>
                  </ImageBackground>
                </View>
              </CardItem>
            </Card>
            <Card style={{ borderRadius: 8, overflow: "hidden" }}>
              <CardItem style={{ backgroundColor: "#71c4ad" }}>
                <Text style={{ color: "white", fontWeight: "900" }}>
                  Grades
                </Text>
              </CardItem>
              <CardItem style={{ flexDirection: "row" }}>
                <Left>
                  <Text style={{ color: "orange" }}>Midterm:</Text>
                  <AnimateNumber
                    style={{ color: "green" }}
                    value={80}
                    countBy={3}
                    timing={(interval, progress) => {
                      // slow start, slow end
                      return interval * (1 - Math.sin(Math.PI * progress)) * 2;
                    }}
                  />
                  <Text style={{ color: "red", marginLeft: -1.5 }}>%</Text>
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
                      <Text style={{ marginLeft: 5 }}>
                        Avg Class Performance
                      </Text>
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
                  <Text style={{ color: "grey" }}>Maths:</Text>
                  <AnimateNumber
                    style={{ color: "green" }}
                    value={80}
                    countBy={3}
                    timing={(interval, progress) => {
                      // slow start, slow end
                      return interval * (1 - Math.sin(Math.PI * progress)) * 2;
                    }}
                  />
                  <Text style={{ color: "green", marginLeft: -1.5 }}>%</Text>
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
                  <Text style={{ color: "grey" }}>Science:</Text>
                  <AnimateNumber
                    style={{ color: "green" }}
                    value={80}
                    countBy={3}
                    timing={(interval, progress) => {
                      // slow start, slow end
                      return interval * (1 - Math.sin(Math.PI * progress)) * 2;
                    }}
                  />
                  <Text style={{ color: "green", marginLeft: -1.5 }}>%</Text>
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
                  <Text style={{ color: "grey" }}>Social:</Text>
                  <AnimateNumber
                    style={{ color: "green" }}
                    value={80}
                    countBy={3}
                    timing={(interval, progress) => {
                      // slow start, slow end
                      return interval * (1 - Math.sin(Math.PI * progress)) * 2;
                    }}
                  />
                  <Text style={{ color: "green", marginLeft: -1.5 }}>%</Text>
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
                  <Text style={{ color: "grey" }}>Computers:</Text>
                  <AnimateNumber
                    style={{ color: "green" }}
                    value={80}
                    countBy={3}
                    timing={(interval, progress) => {
                      // slow start, slow end
                      return interval * (1 - Math.sin(Math.PI * progress)) * 2;
                    }}
                  />
                  <Text style={{ color: "green", marginLeft: -1.5 }}>%</Text>
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
        </Content>
      </Container>
    );
  }
}
