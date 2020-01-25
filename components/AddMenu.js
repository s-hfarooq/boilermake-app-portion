import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';

const AddMenu = () => {
    return (
        <View style={styles.view}>
            <View style={styles.buttonContainer}>
                <View style= {styles.button}>
                    <Button title="Take Photo" color={Colors.addGreen} onPress={console.log("new")}/>
                </View>
                <View style= {styles.button}>
                    <Button title="Select Photo" color={Colors.addGreen} onPress={console.log("existing")}/>
                </View>
            </View>

            <View style= {styles.submitButton}>
                <Button title="Next" color={Colors.addGreen} onPress={console.log("next")}/>
            </View>
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

export default AddMenu;
