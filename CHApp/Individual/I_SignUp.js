import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { TextInput, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Checkbox from '../Checkbox.js';

import styles from '../Style.js';

const I_SignUpScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
  
    const handleSignUp = () => {
      if (password !== confirmPassword) {
        // Display an error message or handle the mismatch
        setErrorMessage("Passwords don't match"); 
        return;
      }
  
      //Else: 
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      setErrorMessage(''); // Clear the error message
      navigation.navigate('I_SignUp2');
    };
  
    return (
      <View style={styles.greyBackground}>
        <View style={styles.containerBack}>
          <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('Start')}>
            Back
          </FontAwesome.Button>
        </View>
        
        <Text style={styles.title}>Individual Sign Up</Text>
        <Text style={styles.subtitles}>First Name</Text>
        {/*<BackButton navigation={navigation} targetScreen="Start" />*/}
        <TextInput
          style={styles.input}
          placeholder="Type First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.subtitles}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.subtitles}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.subtitles}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Text style={styles.subtitles}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your typed Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
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
        <TouchableOpacity onPress={() => navigation.navigate('I_SignIn')}>
          <Text style={styles.link}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  };

export const I_SignUpScreen2 = ({navigation, route}) => { 
    // const {firstName} = route.params;
  
    const uncStudentOptions = ['Yes', 'No'];
    const handleSelectUncStudentOption = (option) => {
      setSelectedUncStudentOption(option);
    };
    const [selectedUncStudentOption, setSelectedUncStudentOption] = useState(null);
  
    const VorDOptions = ['Volunteer', 'Donate', 'Both'];
    const handleSelectVorDOptionsOption = (option) => {
      setSelectedVorDOptionsOption(option);
    };
    const [selectedVorDOptionsOption, setSelectedVorDOptionsOption] = useState(null);
  
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);
    const [isChecked8, setIsChecked8] = useState(false);
  
    
    const handleToggleCheckbox1 = () => {
      setIsChecked1(!isChecked1);
    };
    const handleToggleCheckbox2 = () => {
      setIsChecked2(!isChecked2);
    };
    const handleToggleCheckbox3 = () => {
      setIsChecked3(!isChecked3);
    };
    const handleToggleCheckbox4 = () => {
      setIsChecked4(!isChecked4);
    };
    const handleToggleCheckbox5 = () => {
      setIsChecked5(!isChecked5);
    };
    const handleToggleCheckbox6 = () => {
      setIsChecked6(!isChecked6);
    };
    const handleToggleCheckbox7 = () => {
      setIsChecked7(!isChecked7);
    };
    const handleToggleCheckbox8 = () => {
      setIsChecked8(!isChecked8);
    };
  
  
    const handleDone = () => {
      console.log('UNC student?:', setSelectedUncStudentOption);
      console.log('volunteerOrDonate:', setSelectedVorDOptionsOption);
      navigation.navigate('I_Home');
    };
  
    return (
      <ScrollView style={styles.greyBackground}>
        <View style={styles.containerBack}>
          <FontAwesome.Button name="chevron-left" style={styles.backButton} onPress={() => navigation.navigate('I_SignUp')}>
            Back
          </FontAwesome.Button>
        </View>
        
        <Text style={styles.title}>Hi, </Text>
        <Text style={styles.signup2Text}>We have a few more questions to set up your profile.</Text>
        <Text style={styles.subtitles}>Are you a UNC student?</Text>
        <RadioButton.Group onValueChange={handleSelectUncStudentOption} value={selectedUncStudentOption}>
          {uncStudentOptions.map((option) => (
            <View key={option} style={styles.radioButton}>
              <RadioButton value={option} />
              <Text>{option}</Text>
            </View>
          ))}
        </RadioButton.Group>
  
        <Text style={styles.subtitles}>Are you interested in Volunteering or Donating?</Text>
        <RadioButton.Group onValueChange={handleSelectVorDOptionsOption} value={selectedVorDOptionsOption}>
          {VorDOptions.map((option) => (
            <View key={option} style={styles.radioButton}>
              <RadioButton value={option} />
              <Text>{option}</Text>
            </View>
          ))}
        </RadioButton.Group>
        <Text style={styles.subtitles}>What are you passionate about?</Text>
        <Checkbox label="Children" value={isChecked1} onValueChange={handleToggleCheckbox1} />
        <Checkbox label="Community" value={isChecked2} onValueChange={handleToggleCheckbox2} />
        <Checkbox label="Disaster Relief" value={isChecked3} onValueChange={handleToggleCheckbox3} />
        <Checkbox label="Education" value={isChecked4} onValueChange={handleToggleCheckbox4} />
        <Checkbox label="Environment" value={isChecked5} onValueChange={handleToggleCheckbox5} />
        <Checkbox label="Healthcare" value={isChecked6} onValueChange={handleToggleCheckbox6} />
        <Checkbox label="Human Rights" value={isChecked7} onValueChange={handleToggleCheckbox7} />
        <Checkbox label="Seniors" value={isChecked8} onValueChange={handleToggleCheckbox8} />
  
        <TouchableOpacity
          style={styles.button}
          onPress={handleDone}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

export default I_SignUpScreen;