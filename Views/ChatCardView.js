import React, { Component } from "react";
import ChatCard from "../Components/chatCardComponent";
import { View } from "native-base";
export default class ChatCardView extends Component {
  render() {
    return (
      <View>
        <ChatCard
          notificationCount="12"
          imagePath="https://i.ibb.co/VmgYjcy/teambig.png"
          title="Community Chat"
          details="(Open Group)"
          time="11:00am"
        />
        <ChatCard
          notificationCount="12"
          imagePath="https://i.ibb.co/zr9SfWw/networkicon.png"
          title="Interschool Chat"
          details="(Within School)"
          time="11:00am"
        />
        <ChatCard
          notificationCount=""
          imagePath="https://i.ibb.co/KhMGWL3/profile2.jpg"
          title="Sabrina"
          details="(Online)"
          time="11:00am"
        />
        <ChatCard
          notificationCount=""
          imagePath="https://i.ibb.co/GvzrNvh/profile3.jpg"
          title="Grandpa"
          details="(Online)"
          time="11:00am"
        />
        <ChatCard
          notificationCount=""
          imagePath="https://i.ibb.co/BZvNbCN/Whats-App-Image-2018-07-09-at-12-48-39-AM.jpg"
          title="Madhurima"
          details="(Online)"
          time="11:00am"
        />
      </View>
    );
  }
}
