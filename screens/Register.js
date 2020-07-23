import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Icon ,DatePicker } from 'native-base';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class Friends extends React.Component {
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
        <Container>
            <Text style={{
                fontWeight:'bold', fontSize:25, textAlign:'center', marginTop:40, color:''
            }}>Create New Account</Text>
        {/* <Header /> */}
        <Content>
          <Form>
            <Item stackedLabel>
              <Label> First Name </Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label> Last Name </Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label> E-mail </Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label> Address </Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label> Date of Birth </Label>
              <DatePicker
            //locale={"en"}
            placeHolderText="Select date"
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            </Item>

            <Item stackedLabel last>
              <Label> Your Role </Label>
              <Input placeholder= 'Crech/Grandparent/Parent' placeholderTextColor= 'Grey' />
            </Item>

            <Item stackedLabel last>
              <Label> About Me </Label>
              <Input />
            </Item>

            <Button iconLeft info style={styles.button} onPress={()=>{
              this.props.navigation.navigate({routeName:'Enter'})
            }} title="Register" style={{alignSelf: 'flex-start', height: 40, width: 150, justifyContent: 'center', padding:20}} >
              <Icon name='today' />
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});