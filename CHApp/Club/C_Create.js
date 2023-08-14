import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
//Import of this or that button
import { RadioButton } from 'react-native-paper';
//import of dropdown selection
import { Picker } from '@react-native-picker/picker';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import Checkbox from '../Checkbox.js';
//Import of CSS:
import styles from '../Style.js';

const CreateOppScreen = ({navigation, route}) => {
    const { clubName } = route.params || {};

    const [oppTarget, setOppTarget] = useState('');
    const [oppName, setOppName] = useState('');
    const [oppCause, setOppCause] = useState('');
    const [oppStartDate, setOppStartDate] = useState('');
    const [oppEndDate, setOppEndDate] = useState('');
    const [oppTime, setOppTime] = useState('');
    const [oppLocation, setOppLocation] = useState('');
    const [oppTeaser, setOppTeaser] = useState('');
    const [oppDescription, setOppDescription] = useState('');

  
    const handleVolOpp = () => {

      console.log('Target Audience:', oppTarget);
      console.log('Opp. Title:', oppName);
      console.log('Opp. Cause:', oppCause);
      console.log('Opp. Start Date:', oppStartDate);
      console.log('Opp. End Date:', oppEndDate);
      console.log('Opp. Time:', oppTime);
      console.log('Opp. Location:', oppLocation);
      console.log('Opp. Teaser:', oppTeaser);
      console.log('Opp. Description:', oppDescription);
    }
  
    const handlePost = ({}) => {
      handleVolOpp();
      navigation.navigate('C_Home');

  
    // navigation.navigate('C_Home', { clubName, opportunities });
    }
  
    return(
      <ScrollView>
      <View style={styles.greyBackground}>
        <Text style={styles.user}>Welcome, {clubName || "Guest"}</Text>
        <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('C_Home')}>Cancel</Text>
        </TouchableOpacity>
        
        <Text style={styles.greytext}>Create new opportunity</Text>
        <Text style={styles.subtitles}>Opportunity title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter opportunity name"
          value={oppName}
          onChangeText={(text) => setOppName(text)}
        />
        <Text style={styles.subtitles}>Targeted audience</Text>
        <Picker
          style={styles.picker}
          selectedValue={oppTarget}
          onValueChange={(itemValue, itemIndex) => setOppTarget(itemValue)}
          labelStyle={styles.pickerLabel}
        >
          <Picker.Item label="Select a cause" value="" />
          <Picker.Item label="Volunteers" value="Volunteers" />
          <Picker.Item label="Donors" value="Donors" />
          <Picker.Item label="Both" value="Both" />
        </Picker>
        <Text style={styles.subtitles}>Cause</Text>
        <Picker
          style={styles.picker}
          selectedValue={oppCause}
          onValueChange={(itemValue, itemIndex) => setOppCause(itemValue)}
        >
          <Picker.Item label="Select a cause" value="" />
          <Picker.Item label="Children" value="Children" />
          <Picker.Item label="Community" value="Community" />
          <Picker.Item label="Disaster Relief" value="Disaster Relief" />
          <Picker.Item label="Education" value="Education" />
          <Picker.Item label="Environment" value="Environment" />
          <Picker.Item label="Healthcare" value="Healthcare" />
          <Picker.Item label="Human Rights" value="Human Rights" />
          <Picker.Item label="Seniors" value="Seniors" />
        </Picker>
        <Text style={styles.subtitles}>Start Date</Text>
        <TextInput
          style={styles.input}
          placeholder="i.e. 01/01/2023"
          value={oppStartDate}
          onChangeText={(text) => setOppStartDate(text)}
        />
        <Text style={styles.subtitles}>End Date</Text>
        <TextInput
          style={styles.input}
          placeholder="i.e. 01/01/2023"
          value={oppEndDate}
          onChangeText={(text) => setOppEndDate(text)}
          keyboardType="default"
        />
        <Text style={styles.subtitles}>Opportunity Time</Text>
        <TextInput
          style={styles.input}
          placeholder="i.e  From 11:00 A.M To 3:00 PM"
          value={oppTime}
          onChangeText={(text) => setOppTime(text)}
        />
        <Text style={styles.subtitles}>Opportunity Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location, could be 'Remote'"
          value={oppLocation}
          onChangeText={(text) => setOppLocation(text)}
        />
        <Text style={styles.subtitles}>Opportunity Teaser</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.box}
          placeholder="Enter opportunity teaser"
          value={oppTeaser}
          onChangeText={(text) => setOppTeaser(text)}
        />
        <Text style={styles.subtitles}>Opportunity Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.box}
          placeholder="Provide a detailed description"
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
      </ScrollView>
    )
  }

export default CreateOppScreen;