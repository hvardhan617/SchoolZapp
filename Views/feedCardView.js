import React, { Component } from "react";
import FeedCard from "../Components/feedCardComponent";
import { View } from "native-base";

export default class FeedCardView extends Component {
  render() {
    return (
      <View>
        <FeedCard
          bgpath="https://www.sydneydancecompany.com/wp-content/uploads/2016/05/short-courses-masterclasses.jpg"
          month="Dec"
          date="31"
          title="Annual Day Celebration"
          details="4PM-8PM Audi-Six"
        />
        <FeedCard
          bgpath="http://www.dashinfoundation.org/wp-content/uploads/2015/09/shutterstock_255574723-e1441093678924-1030x543.jpg"
          month="Nov"
          date="30"
          title="Drawing Competition"
          details="7PM-10PM Open Ground"
        />
      </View>
    );
  }
}
