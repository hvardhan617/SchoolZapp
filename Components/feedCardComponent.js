import React, { Component } from 'react';
import { Left,Container , Header, Content, Card, CardItem, Text, Badge, Body, Thumbnail,Icon, Footer,FooterTab,Button, Right } from 'native-base';
import {View,ImageBackground} from 'react-native';

class BackgroundImage extends Component {
  constructor(props){
      super(props);
  }
  render() {
      return (
          <ImageBackground style={{borderRadius:8}} source={{uri:this.props.bgpath}}
            style={{width:null,height:300}}
          >
                  
                  {this.props.children}
                  
          </ImageBackground>
      )
  }
}
export default class FeedCard extends Component {
    render(){
        return (
        <Container>
        <Header />
        <Content padder>
          <Card style={{ borderRadius: 8, overflow:'hidden' }}>
          <BackgroundImage bgpath={this.props.bgpath}>
          <CardItem header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor:'transparent', flex:4 }} />
            
          <CardItem bordered style={{flex:1,backgroundColor:'#71c4ad',paddingBottom:30, borderBottomLeftRadius: 8, borderBottomRightRadius: 8}} footer>
          <Left>
            <View style={{marginTop:10}}>
            <Text style={{color:'white',fontWeight:'900'}}>{this.props.month}</Text>
            <Text style={{color:'white',fontWeight:'900'}}>{this.props.date}</Text>
            </View>
          </Left>
          <Body>
            <View>
            <Text style={{color:'white',fontWeight:'900',fontSize:14}}>{this.props.title}</Text>
            <Text style={{color:'white',fontSize:12}}>{this.props.details}</Text>
            </View>
          </Body>
          <Right>

          </Right>
            </CardItem>
          </BackgroundImage>
          </Card>
        </Content>
      </Container>
        );
    }
}