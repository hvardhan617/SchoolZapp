/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";
import Dashboard from "./Dashboard";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };
  }

  loginUser = (email, password) => {
    this.props.navigation.navigate("AppNavigator");
    // fetch("http://18.191.155.222:8080/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password
    //   })
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson.status);

    //     if (responseJson.status.localeCompare("success") == 0) {
    //       this.props.navigation.navigate("Dash");
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <View style={{ flex: 3, flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#28A885",
                height: 250,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../assets/logowhite.png")}
                style={{
                  height: 107,
                  width: 300
                }}
              />

              <View
                style={{ backgroundColor: "#28A885", height: 2, marginTop: 10 }}
              />
            </View>
            <View
              style={{ backgroundColor: "#28A885", height: 5, marginTop: 10 }}
            />
            <View style={{ flex: 2, backgroundColor: "#ffffff" }}>
              <Form>
                <Item
                  floatingLabel
                  style={{ width: 350, marginLeft: 30, marginTop: 20 }}
                >
                  <Label>
                    <Text style={{ color: "#28A885", fontWeight: "900" }}>
                      Email-Id
                    </Text>
                  </Label>
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
              </Form>

              <Form>
                <Item floatingLabel style={{ width: 350, marginLeft: 30 }}>
                  <Label>
                    <Text style={{ color: "#28A885", fontWeight: "900" }}>
                      Password
                    </Text>
                  </Label>
                  <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
              </Form>
              <Button
                rounded
                onPress={() =>
                  this.loginUser(this.state.email, this.state.password)
                }
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  width: 200,
                  backgroundColor: "#28A885",
                  marginTop: 20,
                  marginBottom: 20
                }}
              >
                <Text style={{ textAlign: "center", alignSelf: "center" }}>
                  LOGIN
                </Text>
              </Button>

              <Text
                style={{
                  color: "#EEAA0E",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 20
                }}
              >
                New User? REGISTER{" "}
              </Text>
            </View>
          </View>
        </ScrollView>
      </Container>
      //   <Container style={styles.container}>
      //     <Header />
      //     <Form>
      //       <Item floatingLabel bordered>
      //         <Label>Email</Label>
      //         <Input
      //           autoCorrect={false}
      //           autoCapitalize="none"
      //           onChangeText={email => this.setState({ email })}
      //         />
      //       </Item>

      //       <Item floatingLabel last bordered>
      //         <Label>Password</Label>
      //         <Input
      //           secureTextEntry={true}
      //           autoCorrect={false}
      //           autoCapitalize="none"
      //           onChangeText={password => this.setState({ password })}
      //         />
      //       </Item>

      //       <Button
      //         style={{ marginTop: 10 }}
      //         full
      //         rounded
      //         success
      //         onPress={() =>
      //           this.loginUser(this.state.email, this.state.password)
      //         }
      //       >
      //         <Text style={{ color: "white" }}>Login</Text>
      //       </Button>

      //       <Button
      //         style={{ marginTop: 10 }}
      //         full
      //         rounded
      //         primary
      //         onPress={() => this.props.navigation.navigate("SignUp")}
      //       >
      //         <Text style={{ color: "white" }}>
      //           Dont have an account? Sign Up
      //         </Text>
      //       </Button>
      //     </Form>
      //   </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 30
  },
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
