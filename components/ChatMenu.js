// import React, { useState } from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
//
// import Colors from '../constants/Colors';
//
// const ChatMenu = () => {
//     return (
//         <View style={styles.view}>
//           <Text>CHAT MENU </Text>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     view: {
//         flex: 1,
//         justifyContent: 'center',
//         alignSelf: 'center',
//         alignItems: 'center',
//         padding: '10%',
//         paddingTop: '30%'
//     },
//
//     buttonContainer: {
//         justifyContent: 'space-between',
//         alignSelf: 'center',
//         alignItems: 'center',
//         width: '80%'
//     },
//
//     button: {
//         paddingVertical: '5%',
//         width: '80%'
//     },
//
//     submitButton: {
//         paddingVertical: '5%',
//         width: '80%'
//     }
// });
//
// export default ChatMenu;


import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

class ChatMenu extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatMenu;
