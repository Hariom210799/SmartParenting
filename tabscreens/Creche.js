import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ListCard from '../components/ListCard'
import { FlatList } from 'react-native-gesture-handler';
import { Content } from 'native-base';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export default class Creche extends React.Component {
    
  render() {
    return(
    <Container >
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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <ListCard navigation={this.props.navigation} name='Nursery Shine' address="Shivaji Nagar" />
          <ListCard navigation={this.props.navigation} name='Kids Space' address='Waman Nagar' />
          <ListCard navigation={this.props.navigation} name='Angel Keeper' address='Ganesh Nagar' />
          <ListCard navigation={this.props.navigation} name='Learning Ladder' address='Shree Nagar' />
          <ListCard navigation={this.props.navigation} name='Toddler Down' address='Anand Nagar'  />    
        </ScrollView>
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
  contentContainer: {
    paddingVertical: 20,
  }
});