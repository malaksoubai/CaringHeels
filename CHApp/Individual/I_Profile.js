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

import styles from '../Style.js';

const I_ProfileScreen= ({navigation}) => {

    const handleLinkPress = () => {
      const url = "mailto: malaksoubai03@gmail.com"; // Your URL here
      Linking.openURL(url);
    }; 
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setemail] = useState('');
      const [number, setNumber] = useState('');
      const [password, setPassword] = useState('');
    
      const handleProfile = () => {
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone Number', number);
        console.log('Password:', password);
        
        navigation.navigate('I_Home');
      }
      return(
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
  
          <ScrollView>
            <View style={styles.greyBackground}>
                <View style={styles.containerBack}>
                    <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('I_Home')}>
                    Cancel
                    </FontAwesome.Button>
                </View>
                <View style={styles.underLine}>
                    <Text style={styles.user}>{"John Doe"}</Text>          
                </View>
                <Text style={styles.greytext}>Edit Profile</Text>
                <View style={styles.editprofileIcon}>
                <Ionicons name="person-circle" size={150} color="#13294B"/>
                </View>
                <Text style={styles.bluetext}>Edit picture</Text>
                <Text style={styles.subtitles}>First Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                />
                <Text style={styles.subtitles}>Last Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                />
                <Text style={styles.subtitles}>Email Address</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => setemail(text)}
                keyboardType="email-address"
                />
                <Text style={styles.subtitles}>Phone Number</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={number}
                onChangeText={(text) => setNumber(text)}
                />
                <Text style={styles.subtitles}>Password</Text>
                <TextInput
                style={styles.input}
                placeholder="*****"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
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
export default I_ProfileScreen