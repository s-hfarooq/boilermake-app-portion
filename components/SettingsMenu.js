import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import CupertinoSwitch from "./CupertinoSwitch";


const SettingsMenu = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cupertinoSwitchRow}>
        <CupertinoSwitch style={styles.cupertinoSwitch} value="true"></CupertinoSwitch>
        <Text style={styles.teacher}>Teacher</Text>
      </View>
      <Text style={styles.settings}>Settings</Text>
      <View style={styles.cupertinoSwitch1Row}>
        <CupertinoSwitch style={styles.cupertinoSwitch1}></CupertinoSwitch>
        <Text style={styles.teacher2}>Available</Text>
      </View>
      <View>
        <Text style={styles.about}>About</Text>
        <Text style={styles.smallTxt}>Made by:{"\n"}Hassan Farooq{"\n"}Jay Mahajan{"\n"}Daniel Bargon{"\n"}Tim Vitkin{"\n\n"}University of Illinois Urbana-Champaign</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoSwitch: {
    width: 45,
    height: 23
  },
  teacher: {
    width: 239,
    height: 37,
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 55
  },
  cupertinoSwitchRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 177,
    marginLeft: 36
  },
  settings: {
    width: 239,
    height: 37,
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    marginTop: -156,
    marginLeft: 68
  },
  cupertinoSwitch1: {
    width: 45,
    height: 23
  },
  teacher2: {
    width: 239,
    height: 37,
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 55
  },
  cupertinoSwitch1Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 163,
    marginLeft: 36
  },
  about: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 50
  },
  smallTxt: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 25
  }
});

export default SettingsMenu;
