import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, KeyboardAvoidingView, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import Checkbox from './Checkbox.js';
//Import of Individual Screens:
import I_SignUpScreen, { I_SignUpScreen2 } from './Individual/I_SignUp.js';
import I_SignInScreen from './Individual/I_SignIn.js';
import I_HomeScreen from './Individual/I_Home.js';
//Import of Club Screens:
import C_SignUpScreen, { C_SignUpScreen2 } from './Club/C_SignUp.js';
import C_SignInScreen from './Club/C_SignIn.js';
import C_HomeScreen from './Club/C_Home.js';
import ProfileScreen from './Club/C_Profile.js';
import CreateOppScreen from './Club/C_Create.js';
//Import of CSS:
import styles from './Style.js';

const I_ProfileScreen = () =>{
    const handleLinkPress = () => {
        const url = "mailto: malaksoubai03@gmail.com"; // Your URL here
        Linking.openURL(url);
    };
    return
}