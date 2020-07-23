import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class ChangePass extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Previous Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>New Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}