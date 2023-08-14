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

const CreateOppScreen = ({route}) => {
    // const {clubName} = route.params;
    const [oppName, setOppName] = useState('');
    const [oppDate, setOppDate] = useState('');
    const [oppTime, setOppTime] = useState('');
    const [oppLocation, setOppLocation] = useState('');
    const [oppDescription, setOppDescription] = useState('');
  
    const handleVolOpp = () => {
      console.log('Opp. Title:', oppName);
      console.log('Opp. Date:', oppDate);
      console.log('Opp. Time:', oppTime);
      console.log('Opp. Location:', oppLocation);
      console.log('Opp. Description:', oppDescription);
    }
  
    const handlePost = () => {
      handleVolOpp();
      // Update the opportunities list with the new opportunity
      setOpportunities(prevOpportunities => [
        ...prevOpportunities,
        {
          // club: clubName, //Do I need to put {} in clubName?
          name: oppName,
          date: oppDate,
          time: oppTime,
          location: oppLocation,
          description: oppDescription,
        }
      ]);
  
    navigation.navigate('C_Home', { clubName, opportunities });
    }
  
    return(
      <View style={styles.greyBackground}>
        {/*<Button onPress={C_HomeScreen}>
          <Text style={styles.buttonText}>Back</Text>
    </Button>*/}
        <Text>Create a Volunteering Opportunity</Text>
        <TextInput
          style={styles.input}
          placeholder="Opportunity Name"
          value={oppName}
          onChangeText={(text) => setOppName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="i.e. 01/01/2023"
          value={oppDate}
          onChangeText={(text) => setOppDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="i.e  From 11:00 A.M To 3:00 PM"
          value={oppTime}
          onChangeText={(text) => setOppTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Opportunity Location"
          value={oppLocation}
          onChangeText={(text) => setOppLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Opportunity Description"
          value={oppDescription}
          onChangeText={(text) => setOppDescription(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePost}
        >
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default CreateOppScreen;