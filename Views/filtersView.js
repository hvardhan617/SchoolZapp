import React, { Component } from "react";
import {
  Container,
  Button,
  Header,
  Content,
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
import { StyleSheet, Picker, Switch } from "react-native";
import {
  MySwitch,
  FilterText,
  MySlider,
  MyRadioButton,
  MyDropDown,
  FilterTextNoPadding
} from "../Components/formInputs";

export default class FiltersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  static navigationOptions = {
    header: null
  };

  // async componentWillMount() {
  //   // await Expo.Font.loadAsync({
  //   //   Roboto: require("native-base/Fonts/Roboto.ttf"),
  //   //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   //   Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  //   // });
  //   this.setState({ loading: false });
  // }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#fff" }}>
          <Left style={{ flex: 1.7 }}>
            <Icon
              style={{ color: "green", padding: 10 }}
              onPress={() => this.props.navigation.goBack()}
              name="md-arrow-round-back"
            />
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={{ color: "green", fontSize: 20 }}>FILTERS</Text>
            </Title>
          </Body>
          <Right style={{ flex: 1.7 }} />
        </Header>
        <Content>
          <FilterText>Distance</FilterText>
          <MySlider val={25} minDistance={0} maxDistance={50} width={260} />
          <FilterText>Medium of School</FilterText>
          <MyDropDown dataArray={new Array("English", "Hindi")} />
          <FilterText>School Board</FilterText>
          <MyRadioButton dataArray={new Array("CBSE", "ICSE", "State Board")} />
          <FilterText>School Type</FilterText>
          <MyRadioButton dataArray={new Array("Co-ed", "Boys", "Girls")} />
          <FilterText>Class</FilterText>
          <MyDropDown
            placeholder={"Select Class"}
            dataArray={
              new Array(
                "Nursery",
                "KG",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
              )
            }
          />
          <ListItem>
            <Left>
              <FilterTextNoPadding>Admissions Open</FilterTextNoPadding>
            </Left>
            <Right>
              <MySwitch />
            </Right>
          </ListItem>
          <Footer>
            <FooterTab>
              <Button>
                <Text>APPLY</Text>
              </Button>
              <Button>
                <Text>RESET</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Container>
    );
  }
}
