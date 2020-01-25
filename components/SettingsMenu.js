import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';
import CupertinoSwitch from "./CupertinoSwitch";


const SettingsMenu = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings </Text>
        <View style={styles.cupertinoSwitchRow}>
          <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
          <Text style={styles.text}>
            Teacher
          </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  title: {
    marginTop: '15%',
    fontSize: 25,
    textAlign: "center",
  },
  cupertinoSwitch: {
    width: 45,
    height: 23,
    marginTop: 35
  },
  text: {
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 54
  },
  cupertinoSwitchRow: {
    height: 144,
    flexDirection: "row",
    flex: 1,
    marginLeft: 37,
    marginTop: 149
  }
});

export default SettingsMenu;
