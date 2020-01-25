import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { normalize } from './Normalize';

import Colors from '../constants/Colors';


const SearchMenu = props => {
    return (
        <View style={styles.view}>
            <Text>SEARCH</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: '15%',
        height: '100%',
        width: '100%'
    }
});

export default SearchMenu;