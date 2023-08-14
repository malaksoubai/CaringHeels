import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

//Import of CSS:
import styles from '../Style.js';

const ProfileScreen = ({navigation}) => {
    const [clubName, setClubName] = useState('');
    const [clubEmail, setClubEmail] = useState('');
    const [clubNum, setClubNum] = useState('');
    const [clubWeb, setClubWeb] = useState('');
    const [clubSM, setClubSM] = useState('');
    const [clubDes, setClubDes] = useState('');
  
    const handleProfile = () => {
      console.log('Club Name:', clubName);
      console.log('Club Email:', clubEmail);
      console.log('Club Phone Number:', clubNum);
      console.log('Club Website:', clubWeb);
      console.log('Social Media:', clubSM);
      console.log('Description:', clubDes);
      
      navigation.navigate('C_Home');
    }
    return(
      <ScrollView style={styles.greyBackground}>
        <Text style={styles.user}>{clubName || "Club"}</Text>
        <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('C_Home')}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.greytext}>Edit Profile</Text>
        <View style={styles.editprofileIcon}>
        <Ionicons name="person-circle" size={150} color="#13294B"/>
        </View>
        <Text style={styles.bluetext}>Edit picture</Text>
        <Text style={styles.subtitles}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter club name"
          value={clubName}
          onChangeText={(text) => setClubName(text)}
        />
        <Text style={styles.subtitles}>Club Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter club email"
          value={clubEmail}
          onChangeText={(text) => setClubEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.subtitles}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={clubNum}
          onChangeText={(text) => setClubNum(text)}
        />
        <Text style={styles.subtitles}>Club Website</Text>
        <TextInput
          style={styles.input}
          placeholder="URL"
          value={clubWeb}
          onChangeText={(text) => setClubWeb(text)}
          keyboardType="url"
        />
        <Text style={styles.subtitles}>Club Social Media</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter club's social media"
          value={clubSM}
          onChangeText={(text) => setClubSM(text)}
        />
        <Text style={styles.subtitles}>Club Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*****"
          value={clubDes}
          onChangeText={(text) => setClubDes(text)}
          secureTextEntry
        />
        <Text style={styles.subtitles}>Club Mission</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter club Description, mission, etc."
          value={clubDes}
          onChangeText={(text) => setClubDes(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleProfile}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
export default ProfileScreen;