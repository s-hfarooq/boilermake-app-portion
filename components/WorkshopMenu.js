import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';

const WorkshopMenu = () => {
    return (
        <View style={styles.view}>
          <Text>WORKSHOP MENU </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        padding: '10%',
        paddingTop: '30%'
    },

    buttonContainer: {
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        width: '80%'
    },

    button: {
        paddingVertical: '5%',
        width: '80%'
    },

    submitButton: {
        paddingVertical: '5%',
        width: '80%'
    }
});

export default WorkshopMenu;
