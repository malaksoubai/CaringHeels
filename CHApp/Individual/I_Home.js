import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, KeyboardAvoidingView, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import styles from '../Style.js';

const I_HomeScreen = () => {
    return(
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>

        <ScrollView>
          <View style={styles.greyBackground}>
          <View style={styles.profileIcon}>
          <Ionicons name="person-circle" size={50} color="#13294B" onPress={() => navigation.navigate('I_Profile')}/>
          </View>
          <Text style={styles.user}>John Doe</Text>
          <View style={styles.cards}>
            <Text>This is a post</Text>
          </View>
          <View style={styles.cards}>
            <Text>This is a post</Text>
          </View>
          <View style={styles.cards}>
            <Text>This is a post</Text>
          </View>
          <View style={styles.cards}>
            <Text>This is a post</Text>
          </View>
          <View style={styles.cards}>
            <Text>This is a post</Text>
          </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  export default I_HomeScreen;