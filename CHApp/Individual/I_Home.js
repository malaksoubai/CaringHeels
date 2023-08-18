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

const Card = () => {
  return (
    <View style={styles.cards}>
      <View style={styles.leftColumn}>
        <Text style={styles.clubName}>Your Club Name</Text>
        <Text style={styles.eventTitle}>Event Title</Text>
        <Text style={styles.notice}>Volunteers Needed</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.date}>Event Date</Text>
        <Text style={styles.location}>Event Location</Text>
        <Text style={styles.teaser}>Event Teaser</Text>
      </View>
    </View>
  );
};

const I_HomeScreen = () => {
    return(
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>

        <ScrollView>
          <View style={styles.greyBackground}>
          <View style={styles.profileIcon}>
          <Ionicons name="person-circle" size={50} color="#13294B" onPress={() => navigation.navigate('I_Profile')}/>
          </View>
          <Text style={styles.user}>Welcome, Guest</Text>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Volunteer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity> */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  export default I_HomeScreen;