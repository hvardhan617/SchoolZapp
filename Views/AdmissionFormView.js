import React, { Component } from "react";
import {
  Container,
  Button,
  Header,
  Content,
  Form,
  Item,
  DatePicker,
  Input,
  Label,
  Footer,
  Icon,
  FooterTab,
  Text,
  Left,
  Right,
  Body,
  Title,
  ListItem,
  Radio,
  View
} from "native-base";
import { StyleSheet, Slider, Picker, Switch } from "react-native";
import {
  MyDropDown,
  MyTextInput,
  FilterText,
  MyDatePicker,
  MyRadioButton
} from "../Components/formInputs";

export default class AdmissionFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#fff" }}>
          <Left style={{ flex: 0.6 }}>
            <Icon style={{ color: "green" }} name="ios-arrow-back" />
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={{ color: "green", fontSize: 20 }}>
                Admission Form
              </Text>
            </Title>
          </Body>
          <Right style={{ flex: 0.6 }} />
        </Header>
        <Content>
          <FilterText>Academic Session</FilterText>
          <MyDropDown
            placeholder="Select Session"
            dataArray={new Array("English", "Hindi")}
          />
          <FilterText>Standard</FilterText>
          <MyDropDown
            placeholder="Select Standard"
            dataArray={new Array("English", "Hindi")}
          />
          <MyTextInput text="Applicant Name" />
          <FilterText>DOB</FilterText>
          <MyDatePicker />
          <FilterText>Gender</FilterText>
          <MyRadioButton dataArray={new Array("Male", "Female")} />
          <MyTextInput text="Primary Email" />
          <MyTextInput text="Father's Name" />
          <MyTextInput text="Mother's Name" />
          <Footer>
            <FooterTab>
              <Button>
                <Text>SUBMIT</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Container>
    );
  }
}
