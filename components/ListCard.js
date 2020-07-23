// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';

// export default class ListCard extends Component {
//   render() {
//     return (
//     <Container style={{maxHeight:360}}>
//         <Content>
//             <Card style={{flexDirection:'column', alignSelf:'center', height:350, width:340, shadowColor:'black', shadowOffset:{height:380, width:400} }}>
//                 <TouchableOpacity onPress={()=>{
//                     this.props.navigation.navigate("CrecheDetails") }}>
//                     <CardItem style={{borderColor:'red'}}>
//                     <Left>
//                         <Thumbnail source={{uri: 'https://nativebase.io/assets/img/front-page-icon.png'}} />
//                         <Body>
//                         <Text>Baby Care Unit - {this.props.num} </Text>
//                         <Text note>GeekyAnts</Text>
//                         </Body>
//                     </Left>
//                     </CardItem>
//                     <CardItem cardBody>
//                     <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuoUvFj0nGjaOq332SlefmydoWCufMHVQwphp9GTc9B0JDfi5-'}} style={{height: 200, width: null, flex: 1}}/>
//                     </CardItem>
//                 </TouchableOpacity>
//                     <CardItem>
//                     <Left>
//                         <Button transparent>
//                         <Icon active name="heart" />
//                         <Text>12 Likes</Text>
//                         </Button>
//                     </Left>
//                     {/* <Body>
                        
//                     </Body> */}
//                     <Right>
//                         <Button transparent>
//                             <Icon active name="chatbubbles" />
//                             <Text>4 Reviews</Text>
//                             </Button>
//                     </Right>
//                     </CardItem>
//                 </Card>
//             </Content>  
//         </Container>
//     );
//   }
// }
import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , Right, Row} from 'native-base';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import CrecheDetails from '../screens/CrecheDetails';
export default class ListCard extends Component {

  render() {


    return (
      <Container style={{padding: 5 , height: 395}}>
        <Content>
          <Card style={{flex: 1 , flexDirection: "column"}}>
            <TouchableNativeFeedback>
                <CardItem button onPress={()=> {
                    this.props.navigation.navigate('CrecheDetails')
                }}>
                <Left>
                    <Thumbnail source={{uri: 'https://i.ya-webdesign.com/images/alphabet-icon-png-4.png'}} />
                    <Body>
                    <Text> {this.props.name} </Text>
                    <Text note> {this.props.address} </Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem style={{flexGrow:1000}} button onPress={()=> {
                    this.props.navigation.navigate('CrecheDetails')
                }}>
                <Body>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkvPxczs2LoW3inY9_nMZGHuVCiNZgIWzHKCPnuEJqZaCKkXYp'}} style={{height: 200, width: null, flex: 1}} style={{height: 200, width: 310, flex: 1}}/>
                </Body>
                </CardItem>
            </TouchableNativeFeedback>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon button name="heart-empty" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
                <Right>
                  <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Reviews</Text>
                      </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}