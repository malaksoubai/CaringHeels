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

const I_ClubScreen = ({ navigation }) => {
    return (
      <View>
        <Text>This is the I_ClubScreen</Text>
      </View>
    );
  };
  
  export default I_ClubScreen;