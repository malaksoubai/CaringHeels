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
import { Card } from './I_Home.js'

import styles from '../Style.js';

const I_MoreScreen = ({ navigation, route }) => {
    const data = route.params.data;
  
    return (
      <ScrollView>
        <View style={styles.iHomeBG}>
            <View style={styles.containerBackii}>
                <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('I_Home')}>
                    Cancel
                </FontAwesome.Button>
            </View>
            <View style={styles.underLine}>
                <Text style={styles.user}>{"John Doe"}</Text>          
            </View>
            <View style={styles.learnCard}>
                <Text style={styles.oppTitle}>{data.eventTitle}</Text>
                <Text style={styles.text}>Organizer:  {data.clubName}</Text>
                <Text style={styles.text}>Targeted Audience:  {data.notice}</Text>
                <Text style={styles.text}>Cause:  Community</Text>
                <Text style={styles.text}>From:  {data.startDate}</Text>
                <Text style={styles.text}>To:  {data.endDate}</Text>
                <Text style={styles.text}>Location:  {data.location}</Text>
                <Text style={styles.text}>Description:  This will include a full description of the event, 
                    including additional information that the host would like to add. 
                    The club should be able to return to a new line and write extensively. 
                    By writing this I am setting a limit number for characters that the host cannot go over. 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('I_Club')}><Text style={styles.link}>Learn more about {data.clubName}</Text></TouchableOpacity>
                {/* Include other data fields here */}
            </View>
        </View>
      </ScrollView>
    );
};
  

export default I_MoreScreen