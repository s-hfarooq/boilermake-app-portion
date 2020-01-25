import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MapView } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';


import UserMenu from './components/UserMenu';
import ChatMenu from './components/ChatMenu';
import TagsMenu from './components/TagsMenu';
import WorkshopMenu from './components/WorkshopMenu';
import SettingsMenu from './components/SettingsMenu';

import Colors from './constants/Colors';


class UserScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UserMenu/>
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ChatMenu/>
      </View>
    );
  }
}

class TagsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TagsMenu/>
      </View>
    );
  }
}

class WorkshopScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WorkshopMenu/>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SettingsMenu/>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator (
  {
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
          </View>
        )
      }
    },

    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-chatbubbles'}/>
          </View>
        ),

        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: Colors.searchBlue }
      }
    },

    Tags: {
      screen: TagsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-pricetags'}/>
          </View>
        ),

        alignSelf: 'center',
        alignItems: 'center',
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: Colors.addGreen }
      }
    },

    Workshop: {
      screen: WorkshopScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-code-working'}/>
          </View>
        ),

        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: Colors.profileRed }
      }
    },

    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-cog'}/>
          </View>
        ),

        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: Colors.setting }
      }
    }
  },

  {
    initialRouteName: 'User',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: Colors.homePurple }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default createAppContainer(TabNavigator);
