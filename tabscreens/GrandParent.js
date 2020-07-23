import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Icon, Input, Button, Item, Thumbnail, Text } from 'native-base';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container >
        {/* <Header /> */}
        <Header searchBar rounded> 
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
              {/* <Icon name="ios-people" /> */}
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List >
            <TouchableNativeFeedback>
            <ListItem avatar button onPress={()=> {
                    this.props.navigation.navigate('GPDetails')
                }} >
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSOixhzDzLdLczBe4kpp0PY8CDeJ-TkU1U2DTwq3evD47rNbOk' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
            <ListItem avatar button onPress={()=> {
                    this.props.navigation.navigate('GPDetails')
                }}>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKEHd3OFQVs4rAxSI62Hy08KYQGpqL3q_wOtGyo0Qhz9QeKaJT' }} />
              </Left>
              <Body>
                <Text>Rathod Sanket</Text>
                <Text note>Kids are messengers of god..</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
            <ListItem avatar button onPress={()=> {
                    this.props.navigation.navigate('GPDetails')
                }}>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCOrjq_ij_oaYs5ZrAuuNm8S4uFHjVqQdm9-aDlnfkChx41ie0' }} />
              </Left>
              <Body>
                <Text>Megha Kulkarni</Text>
                <Text note>Always available to see my own childhood..</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            </TouchableNativeFeedback>


            <TouchableNativeFeedback>
            <ListItem avatar button onPress={()=> {
                    this.props.navigation.navigate('GPDetails')
                }}>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPwrQtirs0WwG-TZJMoY4dGby713kNZa2oySU4dq0ZoIUyEqBK' }} />
              </Left>
              <Body>
                <Text>Atul Ranjan</Text>
                <Text note>Real Happiness of old-age lies in grandchildrens.</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>            
            </TouchableNativeFeedback>

          </List>
        </Content>
      </Container>
    );
  }
}