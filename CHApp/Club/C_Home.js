import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import Checkbox from '../Checkbox.js';

//Import of CSS:
import styles from '../Style.js';

const C_HomeScreen = ({navigation, route}) => {
    const { clubName } = route.params || {}; // Get the clubName from route.params
    return(
      <View style={styles.greyBackground}>
        <View style={styles.profileIcon}>
        <Ionicons name="person-circle" size={50} color="#13294B" onPress={() => navigation.navigate('Profile')}/>
        </View>
        <Text style={styles.user}>Welcome, {clubName || "Guest"}</Text>
       <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Create')}>
          <Text>Create a new Opportunity</Text>
          <Entypo name="circle-with-plus" size={24} color="#13294B" />      
        </TouchableOpacity>
        <Text style={styles.title}>Past Opportunities</Text>
        <ScrollView></ScrollView>
      </View>
    );

  }

  export default C_HomeScreen;