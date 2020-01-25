import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { normalize } from './Normalize';

import Colors from '../constants/Colors';


const ProfileMenu = props => {
    return (
        <View style={styles.view}>
            <View style={styles.titleContainer}>
                <Image source={{uri: props.profilePicture}} style={styles.image}/>
                <Text style={styles.title}>{props.userName}</Text>
            </View>

            <View style={styles.itemHolder}>
                <TouchableOpacity onPress={console.log("saved")} style={styles.items}>
                    <Text style={styles.buttons}>Saved Posts</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("submitted")} style={styles.items}>
                    <Text style={styles.buttons}>Submitted Posts</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("edit")} style={styles.items}>
                    <Text style={styles.buttons}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("sign")} style={styles.items}>
                    <Text style={styles.buttons}>Sign Out</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("about")} style={styles.items}>
                    <Text style={styles.buttons}>About Cheaper</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("legal")} style={styles.items}>
                    <Text style={styles.buttons}>Legal</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("support")} style={styles.items}>
                    <Text style={styles.buttons}>Support Us</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("settings")} style={styles.items}>
                    <Text style={styles.buttons}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: '15%',
        height: '100%',
        width: '100%'
    },

    scrollview: {
        height: '100%',
        width: '100%'
    },

    title: {
        flex: 1,
        fontSize: normalize(40),
        width: '100%'
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },

    itemHolder: {
        flex: 3,
        padding: '15%'
    },

    buttons: {
        fontSize: normalize(30)
    },

    items: {
        padding: '5%',
        borderBottomColor: Colors.profileRed,
        borderBottomWidth: 1
    },

    image: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(150 / 2),
        overflow: "hidden",
        borderWidth: normalize(3),
        borderColor: Colors.profileRed
      }
});

export default ProfileMenu;