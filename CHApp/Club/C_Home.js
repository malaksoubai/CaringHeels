import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, KeyboardAvoidingView,TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import Checkbox from '../Checkbox.js';
import C_MoreScreen from './C_more.js';
//Import of CSS:
import styles from '../Style.js';

const Card = ({navigation, clubName, eventTitle, notice, startDate, endDate, location, teaser}) => {
  const navigateToMoreScreen = () => {
    navigation.navigate('C_More', {
      data:{
        clubName,
        eventTitle,
        notice,
        startDate,
        endDate,
        location,
        teaser,
      }
    });
  };
  return (
    <View style={styles.cards}>
      <View style={styles.leftColumn}>
        <Text style={styles.eventTitle}>{eventTitle}</Text>
        <Text style={styles.date}>{startDate}</Text>
        <Text style={styles.date}>{endDate}</Text>
        <View style={styles.locoIcon}>
          <Ionicons style={styles.locoLeft} name="location-sharp" size={16} color="#C41E3A"/>
          <Text style={[styles.location, styles.locoRight]}>{location}</Text>
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.clubName}>{clubName}</Text>
        <Text style={styles.notice}>{notice}</Text>
        <Text style={styles.teaser}>{teaser}</Text>
        <TouchableOpacity onPress={navigateToMoreScreen}>
        <Text style={styles.more}>Learn more</Text>
       </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('I_More')}>
            <Text style={styles.more}>Learn more</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const C_HomeScreen = ({navigation, route}) => {
    const { clubName } = route.params || {}; // Get the clubName from route.params
    return(
      <ScrollView>
        <View style={styles.iHomeBG}>
          <View style={styles.profileIcon}>
          <Ionicons name="person-circle" size={50} color="#13294B" onPress={() => navigation.navigate('Profile')}/>
          </View>
          <View style={styles.underLine}>
            <Text style={styles.user}>Hand in Hand</Text>
          </View>
          <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Create')}>
            <Text>Create a new Opportunity</Text>
            <Entypo name="circle-with-plus" size={24} color="#13294B" />      
          </TouchableOpacity>
          <View style={styles.underLine}>
            <Text style={styles.opp}>Opportunities</Text>
          </View>
          <Card
              clubName= "Hand in Hand"
              eventTitle="Fall Charity Gala"
              notice="For Volunteers"
              startDate= "08/25 at 5:00 PM"
              endDate="08/25 at 10:00 PM"
              location="Great Hall"
              teaser="Join us for a memorable evening of giving and fun"
          />
        </View>
      </ScrollView>
    );

  }

  export default C_HomeScreen;