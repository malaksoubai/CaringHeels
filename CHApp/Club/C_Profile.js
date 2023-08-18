import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity,ScrollView, KeyboardAvoidingView } from 'react-native';
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

  const handleLinkPress = () => {
    const url = "mailto: malaksoubai03@gmail.com"; // Your URL here
    Linking.openURL(url);
  }; 
    const [clubName, setClubName] = useState('');
    const [clubEmail, setClubEmail] = useState('');
    const [repName, setRepName] = useState('');
    const [repEmail, setRepEmail] = useState('');
    const [clubNum, setClubNum] = useState('');
    const [clubWeb, setClubWeb] = useState('');
    const [clubSM, setClubSM] = useState('');
    const [clubDes, setClubDes] = useState('');
  
    const handleProfile = () => {
      console.log('Club Name:', clubName);
      console.log('Club Email:', clubEmail);
      console.log('Rep. Name:', repName);
      console.log('Rep. Email:', repEmail);
      console.log('Club Phone Number:', clubNum);
      console.log('Club Website:', clubWeb);
      console.log('Social Media:', clubSM);
      console.log('Description:', clubDes);
      
      navigation.navigate('C_Home');
    }
    return(
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>

        <ScrollView>
          <View style={styles.greyBackground}>
          <View style={styles.containerBack}>
              <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('Start')}>
                Cancel
              </FontAwesome.Button>
            </View>
            <Text style={styles.user}>{clubName || "Hand in Hand"}</Text>          
          <Text style={styles.greytext}>Edit Profile</Text>
          <View style={styles.editprofileIcon}>
          <Ionicons name="person-circle" size={150} color="#13294B"/>
          </View>
          <Text style={styles.bluetext}>Edit picture</Text>
          <Text style={styles.subtitles}>Club Name</Text>
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
          <Text style={styles.subtitles}>Representative Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Representive club name"
            value={repName}
            onChangeText={(text) => setRepName(text)}
          />
          <Text style={styles.subtitles}>Representative Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Representive email"
            value={repEmail}
            onChangeText={(text) => setRepEmail(text)}
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
          <TouchableOpacity
            style={styles.buttonText}
            onPress={() => navigation.navigate('Start')}
          >
            <Text style={styles.link}>Log Out</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text>For more help, please contact:</Text>
          <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.email}>malaksoubai03@gmail.com</Text>
          </TouchableOpacity>
          <Text style={styles.text}>© 2023 CaringHeels. All rights reserved.</Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
export default ProfileScreen;