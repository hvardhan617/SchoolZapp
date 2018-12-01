/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground
} from "react-native";

import {
  Container,
  Icon,
  Title,
  Body,
  Left,
  Right,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Card,
  CardItem
} from "native-base";
import SchoolPhoto from "../Components/SchoolPhoto";

export default class SchoolDetails extends Component {
  render() {
    const { navigation } = this.props;
    const navObj = navigation.getParam("navigation", null);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title style={{ textAlign: "center" }}>Details</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name="chatbubbles" />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <Content>
            <ImageBackground
              source={require("../assets/school.png")}
              style={{
                height: 200,
                width: null,
                flex: 1,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5
              }}
            >
              <Button
                transparent
                style={{
                  alignSelf: "flex-end",
                  height: 50,
                  width: 50,
                  marginRight: 10,
                  fontSize: 40
                }}
              >
                <Icon name="md-heart-outline" style={{ color: "#ffffff" }} />
              </Button>
              <Button
                transparent
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: 50,
                  width: 50,
                  marginRight: 30
                }}
              >
                <Image source={require("../assets/location.png")} />
              </Button>
              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: 30,
                  width: 50,
                  marginRight: 4,
                  fontSize: 10
                }}
              >
                2.5 km{" "}
              </Text>
            </ImageBackground>

            <SchoolPhoto />

            <Text style={{ marginLeft: 15, marginTop: 7, marginBottom: 7 }}>
              {" "}
              Facilities{" "}
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.iconView}>
                <Image
                  style={styles.facilitiesIcons}
                  source={require("../assets/library.png")}
                />
                <Text style={styles.facilitiesText}>library</Text>
              </View>
              <View style={styles.iconView}>
                <Image
                  style={styles.facilitiesIcons}
                  source={require("../assets/comp.png")}
                />
                <Text style={styles.facilitiesText}>Computer Lab</Text>
              </View>
              <View style={styles.iconView}>
                <Image
                  style={styles.facilitiesIcons}
                  source={require("../assets/dish.png")}
                />
                <Text style={styles.facilitiesText}>Canteen</Text>
              </View>
              <View style={styles.iconView}>
                <Image
                  style={styles.facilitiesIcons}
                  source={require("../assets/hospital.png")}
                />
                <Text style={styles.facilitiesText}>Medical</Text>
              </View>

              <View style={styles.iconView}>
                <Image
                  style={styles.facilitiesIcons}
                  source={require("../assets/library.png")}
                />
                <Text style={styles.facilitiesText}>library</Text>
              </View>
              <View style={styles.iconView}>
                <Image
                  style={styles.facilitiesIcons}
                  source={require("../assets/comp.png")}
                />
                <Text style={styles.facilitiesText}>Computer Lab</Text>
              </View>
            </ScrollView>

            <View
              style={{
                borderBottomColor: "#BFB4B4",
                borderBottomWidth: 1,
                margin: 7
              }}
            />
            <View
              style={{
                flex: 11,
                flexDirection: "row",
                //justifyContent: 'space-between',
                height: 30
              }}
            >
              <View style={{ flex: 6 }}>
                <Text style={{ marginLeft: 15, marginBottom: 1 }}>
                  {" "}
                  Admissions{" "}
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text
                  style={{
                    marginLeft: 1,
                    marginBottom: 1,
                    marginRight: 3,
                    fontSize: 10,
                    color: "#9A9090",
                    textAlign: "right"
                  }}
                >
                  {" "}
                  ( 11 Dec - 15 Dec ){" "}
                </Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text
                  style={{
                    marginLeft: 1,
                    marginBottom: 1,
                    marginRight: 7,
                    fontSize: 13,
                    color: "#F31212"
                  }}
                >
                  {" "}
                  OPEN{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 5,
                flexDirection: "row",
                //justifyContent: 'space-between',
                height: 25
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ marginLeft: 15, fontSize: 10, marginBottom: 1 }}>
                  {" "}
                  Availability :{" "}
                </Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text
                  style={{
                    marginLeft: 1,
                    marginBottom: 1,
                    fontSize: 14,
                    color: "#28A885"
                  }}
                >
                  {" "}
                  64 Seats{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 5,
                flexDirection: "row",
                //justifyContent: 'space-between',
                height: 25
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ marginLeft: 15, fontSize: 10, marginBottom: 1 }}>
                  {" "}
                  Stats :{" "}
                </Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text
                  style={{
                    marginLeft: 1,
                    marginBottom: 1,
                    fontSize: 14,
                    color: "#28A885"
                  }}
                >
                  {" "}
                  12 people have applied in the past 1 month{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 5,
                flexDirection: "row",
                //justifyContent: 'space-between',
                height: 25
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ marginLeft: 15, fontSize: 10, marginBottom: 1 }}>
                  Fee :{" "}
                </Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text
                  style={{
                    marginLeft: 1,
                    marginBottom: 10,
                    fontSize: 14,
                    color: "#28A885"
                  }}
                >
                  {" "}
                  10,000 (monthly){" "}
                </Text>
              </View>
            </View>
          </Content>
        </ScrollView>
        <Footer>
          <FooterTab>
            <Button
              onPress={() =>
                navObj.navigate("Admission", {
                  navigation: this.props.navigation
                })
              }
              full
            >
              <Text style={styles.footerText}>ADMISSION FORM</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconView: {
    justifyContent: "center",
    alignItems: "center"
  },

  facilitiesIcons: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 20
  },
  facilitiesText: {
    fontSize: 11,
    textAlign: "center"
  },
  footerText: {
    fontSize: 17
  }
});
