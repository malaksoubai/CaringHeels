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

const I_SignInScreen = ({navigation}) => {

  const handleLinkPress = () => {
    const url = "mailto: malaksoubai03@gmail.com"; // Your URL here
    Linking.openURL(url);
  };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = () => {
      console.log('Email:', email);
      console.log('Password:', password);
      navigation.navigate('I_Home');
  
    };
  
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
        <ScrollView>
          <View style={styles.greyBackground}>
            <View style={styles.containerBack}>
              <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('Start')}>
                Back
              </FontAwesome.Button>
            </View>
            <Text style={styles.title}>Individual Sign In</Text>
            <Text style={styles.subtitles}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
            <Text style={styles.subtitles}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignIn}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('I_SignUp')}>
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text>For more help, please contact:</Text>
            <TouchableOpacity onPress={handleLinkPress}>
              <Text style={styles.email}>malaksoubai03@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

export default I_SignInScreen;