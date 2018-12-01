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

export class FilterTextNoPadding extends Component {
  render() {
    return <Text style={styles.onlyFilterText}>{this.props.children}</Text>;
  }
}

export class MySwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { val: true };
    this.switchValueChange = this.switchValueChange.bind(this);
  }
  switchValueChange = () => {
    alert("lol");
    if (this.state.val == true) this.setState({ val: false });
    else this.setState({ val: true });
  };
  render() {
    return (
      <Switch
        onValueChange={() => {
          if (this.state.val == true) this.setState({ val: false });
          else this.setState({ val: true });
        }}
        value={this.state.val}
      />
    );
  }
}

export class FilterText extends Component {
  render() {
    return <Text style={styles.filterText}>{this.props.children}</Text>;
  }
}

export class MyTextInput extends Component {
  render() {
    return (
      <Form>
        <Item stackedLabel style={{ width: 250, marginLeft: 30 }}>
          <Label>
            <Text style={{ color: "green", fontWeight: "900" }}>
              {this.props.text}
            </Text>
          </Label>
          <Input />
        </Item>
      </Form>
    );
  }
}

export class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <DatePicker
        defaultDate={new Date(2018, 11, 30)}
        minimumDate={new Date(1990, 1, 1)}
        maximumDate={new Date(2018, 11, 30)}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Select date"
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ marginLeft: 20, color: "green" }}
        onDateChange={this.setDate}
      />
    );
  }
}

export class MyRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
    this.setValue = this.setValue.bind(this);
  }
  initialiseLabels = () => {
    let labels = new Array();
    for (let i = 0; i < this.props.dataArray.length; ++i) {
      labels.push(
        <ListItem style={{ width: 105 }} key={this.props.dataArray[i]}>
          <Left>
            <Text>{this.props.dataArray[i]}</Text>
          </Left>
          <Right>
            <Radio
              onPress={() => this.setValue(i)}
              selected={i == this.state.current}
            />
          </Right>
        </ListItem>
      );
    }
    return labels;
  };
  setValue = function(value) {
    this.setState({ current: value });
  };
  render() {
    return (
      <View style={{ width: 300, marginLeft: 18, flexDirection: "row" }}>
        {this.initialiseLabels()}
      </View>
    );
  }
}

export class MyDropDown extends Component {
  constructor(props) {
    super(props);
    this.flag = true;
    if (this.props.placeholder) {
      this.state = { current: this.props.placeholder };
    } else {
      this.state = { current: this.props.dataArray[0] };
    }
    this.labels = new Array();
    if (this.props.placeholder) {
      this.labels.push(
        <Picker.Item
          key={this.props.placeholder}
          label={this.props.placeholder}
          value={this.props.placeholder}
        />
      );
    }
    for (let i = 0; i < this.props.dataArray.length; ++i) {
      this.labels.push(
        <Picker.Item
          key={this.props.dataArray[i]}
          label={this.props.dataArray[i]}
          value={this.props.dataArray[i]}
        />
      );
    }
  }
  render() {
    if (
      this.props.placeholder &&
      this.props.placeholder.localeCompare(this.state.current) != 0 &&
      this.flag
    ) {
      this.labels.splice(0, 1);
      this.flag = false;
    }
    return (
      <Picker
        selectedValue={this.state.current}
        style={{ height: 50, width: 300, marginLeft: 30 }}
        onValueChange={itemValue => this.setState({ current: itemValue })}
      >
        {this.labels}
      </Picker>
    );
  }
}
let marginLeft = 30;
export class MySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: this.props.val,
      minDistance: this.props.minDistance,
      maxDistance: this.props.maxDistance
    };
  }
  render() {
    return (
      <View>
        <Slider
          style={styles.slider}
          step={1}
          minimumValue={this.state.minDistance}
          maximumValue={this.state.maxDistance}
          value={this.state.distance}
          onValueChange={val => this.setState({ distance: val })}
          thumbTintColor="green"
          maximumTrackTintColor="green"
          minimumTrackTintColor="green"
        />
        <View style={styles.textCon}>
          <Text style={styles.minVal}>{this.state.minDistance} km</Text>
          <Text style={styles.currentVal}>{this.state.distance + "km"}</Text>
          <Text style={styles.maxVal}>{this.state.maxDistance} km</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textCon: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  slider: {
    width: 300,
    marginLeft: marginLeft
  },
  minVal: {
    color: "grey",
    marginLeft: marginLeft
  },
  currentVal: {
    color: "grey",
    paddingLeft: 30
  },
  maxVal: {
    color: "grey",
    marginLeft: 50
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 15
  },
  onlyFilterText: {
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 10,
    color: "#28a871"
  },
  filterText: {
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 30,
    color: "#28a871",
    paddingBottom: 10,
    paddingTop: 20
  }
});
