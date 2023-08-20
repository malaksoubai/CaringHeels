import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, KeyboardAvoidingView, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import Checkbox from '../Checkbox.js';
import I_MoreScreen from './I_more.js';
import I_CardComponent from './I_Card.js';

import styles from '../Style.js';

const I_ClubScreen = ({ navigation }) => {
    return (
        <View style={styles.iHomeBG}>
            <View style={styles.containerBackii}>
                <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('I_More')}>
                    Back
                </FontAwesome.Button>
            </View>
            <View style={styles.underLine}>
                <Text style={styles.user}>{"Hand in Hand"}</Text>          
            </View>
            <View style={styles.editprofileIcon}>
                <Ionicons name="person-circle" size={150} color="#13294B"/>
            </View>
            <Text style={styles.clubDescriptionText}>
                This text will include a full description provided by the club. 
                Examples of what they can include are their aspirations, their mission, their goal, 
                their expectations, their slogan, their targeted audience, why should people care, etc, etc, etc.
            </Text>
            <Text style={styles.clubDescriptionText}>
                They can skip a line to make their paragraph more structured and organized.
                They can add emojis 😉
            </Text>
            <Text style={styles.clubDescriptionText}>
                Clubs can add links to their Instagram, Facebook, or any other accounts they want to share with the public.
                This should be different than the website account they provide below.
            </Text>
        </View>
    );
  };
  
  export default I_ClubScreen;