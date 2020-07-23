// import React from 'react';
// import { StyleSheet, Text, Button, View } from 'react-native';

// export default class AccountMenu extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>This is Account's Menu</Text>
//         <Button
//           title="Back to home"
//           onPress={() =>
//             this.props.navigation.navigate('Home')
//           }
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { Component } from "react";
import { Container, Header, Content, Thumbnail, Button, Text, Right, Left, Icon, ListItem, List } from "native-base";
import { BottomTabBar } from "react-navigation-tabs";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import ChangePass from '../components/ChangePass'
import {TouchableOpacity} from "react-native";
import edit from '../screens/edit';
import setting from '../screens/setting';
import help from '../screens/help';


export default class AccountMenu extends Component {
  render() {
    return (
    <Container>
      <Container>
        <Header />
        <Content>
          <List>


             <ListItem button>
             <TouchableOpacity onPress={() =>{
              this.props.navigation.navigate('EditPro')
              }}>
              <Left>
                <Text>Edit Profile</Text>
              </Left>
              {/* <Right>
                 <Icon name="arrow-forward" />
              </Right> */}
             </TouchableOpacity>
             </ListItem>


            <ListItem button>
            <TouchableOpacity onPress={() =>{
              this.props.navigation.navigate('SettingPro')
              }}>  
             <Left>
                <Text>Settings</Text>
              </Left>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </TouchableOpacity>  
            </ListItem>
            <ListItem button>
            <TouchableOpacity onPress={() =>{
              this.props.navigation.navigate('HelpPro')
              }}>   
              <Left>
                <Text>Help and Support</Text>
              </Left>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </TouchableOpacity>  
            </ListItem>

            <ListItem button>
              <Left>
                <Text>Feedback</Text>
              </Left>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>

            <ListItem button>
              <Left>
                <Text>Others</Text>
              </Left>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>
          </List>
        </Content>
      </Container>


      <Container style={{maxHeight:'15%'}}>
          <Content contentStyle={{width:'100%', height:'50%',backgroundColor:'red'}} style={{}}>
              <Button rounded style={{margin: 10, backgroundColor:'red', alignSelf:'center',alignItems:'center'}} onPress={()=>{
                  this.props.navigation.navigate({routeName:'Enter'})
              }}>
                      <Text style={{textAlignVertical:'center'}}>Log Out</Text>
              </Button>
          </Content>
      </Container>
    </Container>
    );
  }
}