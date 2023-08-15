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

//Import of CSS:
import styles from '../Style.js';


const C_SignUpScreen = ({navigation}) => { //call upon clubName??

    const handleLinkPress = () => {
      const url = "mailto: malaksoubai03@gmail.com"; // Your URL here
      Linking.openURL(url);
    };

    const [clubName, setClubName] = useState('');
    const [clubEmail, setClubEmail] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [cConfirmPassword, setCConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
  
    const handleC_SignUp = () => {
      if (cPassword !== cConfirmPassword) {
        // Display an error message or handle the mismatch
        setErrorMessage("Passwords don't match"); 
        return;
      }
  
      console.log('Club Name:', clubName);
      console.log('Club Email:', clubEmail);
      console.log('Password:', cPassword);
      console.log('Confirm Password:', cConfirmPassword);
      setErrorMessage(''); // Clear the error message
      // navigation.navigate('C_Home', { clubName });
      // navigation.navigate('C_SignUp2'); // Should this be here and in and in handleSignUp?
    }
  
    const handleSignUp = () => {
      handleC_SignUp();
      navigation.navigate('C_SignUp2');
    }
  
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
        <ScrollView>
          <View style={styles.greyBackground}>
            <View style={styles.containerBack}>
              <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('Start')}>
                Back
              </FontAwesome.Button>
            </View>
            <Text style={styles.title}>Club Sign Up</Text>
            <Text style={styles.subtitles}>Club Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Club Name"
              value={clubName}
              onChangeText={(text) => setClubName(text)}
            />
            <Text style={styles.subtitles}>Club Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Club Email address"
              value={clubEmail}
              onChangeText={(text) => setClubEmail(text)}
            keyboardType="email-address"
            />
            <Text style={styles.subtitles}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Create a Password"
              value={cPassword}
              onChangeText={(text) => setCPassword(text)}
            />
            <Text style={styles.subtitles}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your typed Password"
              value={cConfirmPassword}
              onChangeText={(text) => setCConfirmPassword(text)}
              secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignUp}  
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('C_SignIn')}>
              <Text style={styles.link}>Sign in</Text>
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
  
export const C_SignUpScreen2 = ({navigation}) => { //call upon clubName??

    const handleLinkPress = () => {
      const url = "mailto: malaksoubai03@gmail.com"; // Your URL here
      Linking.openURL(url);
    };

    const uncAffiliatedOptions = ['Yes', 'No'];
    const handleSelectUncAffiliatedOption = (option) => {
      setSelectedUncAffiliatedOption(option);
    };
    const [selectedUncAffiliatedOption, setSelectedUncAffiliatedOption] = useState(null);
  
    const VorDOptions = ['Volunteer', 'Donate', 'Both'];
    const handleSelectVorDOptionsOption = (option) => {
      setSelectedVorDOptionsOption(option);
    };
    const [selectedVorDOptionsOption, setSelectedVorDOptionsOption] = useState(null);
  
    const [clubLink, setClubLink] = useState('');
    const [clubDescription, setClubDescription] = useState('');
  
  
    const handleDone = () => {
      console.log('UNC affiliated?:', selectedUncAffiliatedOption);
      console.log('volunteerOrDonate:', selectedVorDOptionsOption);
      console.log('clubLink:', clubLink);
      console.log('clubDescription:', clubDescription);
      navigation.navigate('C_Home');
    };
  
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
        <ScrollView>
          <View style={styles.greyBackground}>
          <View style={styles.containerBack}>
            <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('C_SignUp')}>
              Back
            </FontAwesome.Button>
          </View>
          
          <Text style={styles.title}>Hi, </Text>
          <Text style={styles.signup2Text}>We have a few more questions to set up your profile.</Text>
          <Text style={styles.subtitles}>Are you a UNC affiliated Club or Organization?</Text>
          <RadioButton.Group onValueChange={handleSelectUncAffiliatedOption} value={selectedUncAffiliatedOption}>
            {uncAffiliatedOptions.map((option) => (
              <View key={option} style={styles.radioButton}>
                <RadioButton value={option} />
                <Text>{option}</Text>
              </View>
            ))}
          </RadioButton.Group>
    
          <Text style={styles.subtitles}>Are you interested in posting Volunteering or Donation opportunities?</Text>
          <RadioButton.Group onValueChange={handleSelectVorDOptionsOption} value={selectedVorDOptionsOption}>
            {VorDOptions.map((option) => (
              <View key={option} style={styles.radioButton}>
                <RadioButton value={option} />
                <Text>{option}</Text>
              </View>
            ))}
          </RadioButton.Group>
          <Text style={styles.subtitles}>Provide a link to the Club's website</Text>
          <TextInput
            style={styles.input}
            placeholder="Paste URL here"
            value={clubLink}
            onChangeText={(text) => setClubLink(text)}
            keyboardType="url"
          />
          <Text style={styles.subtitles}>Provide a brief description of the club</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.box}
            placeholder="Please specify your mission"
            value={clubDescription}
            onChangeText={(text) => setClubDescription(text)}
            keyboardType="default"
          />
        
          <TouchableOpacity
            style={styles.button}
            onPress={handleDone}
          >
            <Text style={styles.buttonText}>Done</Text>
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

export default C_SignUpScreen;