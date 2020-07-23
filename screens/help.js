import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconTextButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Help and Ask</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="create"></Icon>
              <Text>Edit</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}