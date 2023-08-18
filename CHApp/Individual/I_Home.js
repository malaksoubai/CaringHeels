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

const Card = ({clubName, eventTitle, notice, startDate, endDate, location, teaser}) => {
  return (
    <View style={styles.cards}>
      <View style={styles.leftColumn}>
        <Text style={styles.eventTitle}>{eventTitle}</Text>
        <Text style={styles.date}>{startDate}</Text>
        <Text style={styles.date}>{endDate}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.clubName}>{clubName}</Text>
        <Text style={styles.notice}>{notice}</Text>
        <Text style={styles.teaser}>{teaser}</Text>
        <TouchableOpacity><Text style={styles.more}>Learn more</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const I_HomeScreen = () => {
    return(
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>

        <ScrollView>
          <View style={styles.iHomeBG}>
          <View style={styles.profileIcon}>
          <Ionicons name="person-circle" size={50} color="#13294B" onPress={() => navigation.navigate('I_Profile')}/>
          </View>
          <Text style={styles.user}>John Doe</Text>
          <Card
            clubName= "Hand in Hand"
            eventTitle="Fall Charity Gala"
            notice="For Volunteers"
            startDate= "08/25 at 5:00 PM"
            endDate="08/25 at 10:00 PM"
            startDate= "08/25 at 5:00 PM"
            endDate="08/25 at 10:00 PM"
            location="Great Hall"
            teaser="Join us for a memorable evening of giving and fun"
          />
          <Card
            clubName= "Kids' Association"
            eventTitle="Toy Donation"
            notice="For Donors"
            startDate= "08/01 at 8:00 AM"
            endDate="10/01 at 11:59 PM"
            startDate= "08/01 at 8:00 AM"
            endDate="10/01 at 11:59 PM"
            location="Carmichael"
            teaser="Donate money or toys for hospital kids"
          />
          <Card
            clubName= "BluerFuture"
            eventTitle="Blue Future"
            notice="For Donors"
            startDate= "08/15 at 9:00 A.M."
            endDate="09/30 at 11:59 PM"
            startDate= "08/15 at 9:00 AM"
            endDate="09/30 at 11:59 PM"
            location="Remote"
            teaser="Donate money to produce eco-friendly solar-powered tables"
          />
          <Card
            clubName= "Kids' Association"
            eventTitle="SunFlower"
            notice="For Volunteers"
            startDate= "08/19 at 11:00 AM"
            endDate="08/19 at 3:00 Pm"
            startDate= "08/19 at 11:00 AM"
            endDate="08/19 at 3:00 PM"
            location="Lenoir"
            teaser="Let's plant Sunflowers and other plants"
          />
          <Card
            clubName= "Youth Club"
            eventTitle="Helping Seniors"
            notice="For Volunteers"
            startDate= "08/13 at 9:00 AM"
            endDate="08/13 at 10:00 PM"
            startDate= "08/13 at 9:00 AM"
            endDate="08/13 at 10:00 PM"
            location="Hinton James"
            teaser="Join us to spend a wonderful day with seniors"
          />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  export default I_HomeScreen;