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
import I_HomeScreen from './I_Home.js';
import styles from '../Style.js';

const I_CardComponent = ({navigation, clubName, eventTitle, notice, startDate, endDate, location, teaser}) => {
    const navigateToMoreScreen = () => {
      navigation.navigate('I_More', {
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

export default I_CardComponent;