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

const C_SignInScreen = ({navigation}) => {
    const [clubEmail, setClubEmail] = useState('');
    const [cPassword, setCPassword] = useState('');
  
    const handleC_SignIn = () => {
      console.log('Club Email:', clubEmail);
      console.log('Password:', cPassword);
      
      navigation.navigate('C_Home');
  
    }
    return (
      <View style={styles.greyBackground}>
        <View style={styles.containerBack}>
          <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('Start')}>
            Back
          </FontAwesome.Button>
        </View>
        <Text style={styles.title}>Club Sign In</Text>
        <Text style={styles.subtitles}>Club Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Type Club Email address"
          value={clubEmail}
          onChangeText={(text) => setClubEmail(text)}
        />
        <Text style={styles.subtitles}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={cPassword}
          onChangeText={(text) => setCPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleC_SignIn}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('C_SignUp')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    );
  };

export default C_SignInScreen;