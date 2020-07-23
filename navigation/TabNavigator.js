import React, { Component } from "react";
import AccountMenu from '../tabscreens/AccountMenu';
import Creche from '../tabscreens/Creche'
import GrandParent from '../tabscreens/GrandParent'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

BTabNavigator = createBottomTabNavigator(
  {
    Creche: { screen: Creche },
    GrandP: { screen: GrandParent},
    Account: { screen: AccountMenu }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab >
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("Creche")}>
              <Icon name="bed" />
              <Text>Creches</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("GrandP")}>
              <Icon name="person" />
              <Text>Grandparent</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("Account")}>
              <Icon name="person" />
              <Text>Profile
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default createAppContainer(BTabNavigator);

