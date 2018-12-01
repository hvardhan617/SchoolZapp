import React, { Component } from 'react';
import { Left,Container , Header, Content, Card, CardItem, Text, Badge, Body, Thumbnail,Icon, Footer,FooterTab,Button, Right } from 'native-base';
import {View} from 'react-native';
export default class ChatCardComponent extends Component {
  
  notifyOrNot=()=>{
    if(undefined!=this.props.notificationCount && null!=this.props.notificationCount && this.props.notificationCount.trim().length>0)
      return (
        <Badge warning style={{width:30,marginLeft:5}}>
                    <Text style={{fontSize:10}}>{this.props.notificationCount}</Text>
                  </Badge>
      );
    else
      return (
        <Badge warning style={{width:30,marginLeft:5,backgroundColor:'transparent'}}>
                    <Text style={{fontSize:10}}>{this.props.notificationCount}</Text>
                  </Badge>
      );
  }
  
  render() {
    
    return (
      <Container>
        <Header />
        <Content padder>
          <Card style={{ borderRadius: 8, overflow:'hidden' }}>
            <CardItem header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius:8, borderBottomRightRadius:8 }}>
              <Left>
                <Thumbnail source={{uri:this.props.imagePath}} />
              </Left>
              <Body>
                <View>
                  <Text style={{fontSize:16,fontWeight:'900',marginTop:5}}>{this.props.title}</Text>
                  <Text style={{fontSize:10,color:'grey'}}>{this.props.details}</Text>
                </View>
              </Body>
              <Right>
              <View>
                  <Text style={{fontSize:10,marginBottom:4}}>{this.props.time}</Text>
                  {this.notifyOrNot()}
                </View>
              </Right>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
