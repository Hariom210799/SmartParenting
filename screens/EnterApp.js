import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, Form, Item, Label, Input } from 'native-base';
export default class EnterApp extends Component {
  render() {
    return (
      <Container>
        {/* <Header>
          <Title>
            Smart Parenting
          </Title>
        </Header> */}
        <Container contentContainerStyle={{paddingTop:100}}>
          <Content style={{paddingTop: 60}}>
            <Form>
              <Item rounded>
                <Label>       </Label>
                <Input placeholderTextColor="grey" placeholder="Username" />
              </Item>
              <Item rounded style={{marginTop: 20}} >
                <Label>       </Label>
                <Input placeholderTextColor="grey" placeholder="Password" secureTextEntry ={true} />
              </Item>
            </Form>
          </Content>
        </Container>  


        <Content contentContainerStyle={{justifyContent:'center', alignItems:'center', alignSelf:'stretch', paddingTop:10}}> 
          <Content contentContainerStyle={{justifyContent:'center', alignSelf:'center',}}>
            <Button bordered style={styles.button} onPress={()=>{
              this.props.navigation.navigate({routeName:"TabNav"})
            }}>
              <Icon name='log-in' />
              <Text>Log In</Text>
            </Button>
          </Content>
          <Content contentContainerStyle={{justifyContent:'center', alignSelf:'center', paddingTop:50}}>
            <Button iconLeft info style={styles.button} onPress={()=>{
              this.props.navigation.navigate({routeName:'Register'})
            }} >
              <Icon name='today' />
              <Text>Register</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  button:{
    alignSelf: 'flex-start', height: 40, width: 150, justifyContent: 'center', padding:20
  },
  log:{
    justifyContent:'center',
    alignSelf:'center'
  }
})