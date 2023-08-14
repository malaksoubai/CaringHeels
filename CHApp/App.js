import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import Checkbox from './Checkbox.js';
//Import of Individual Screens:
import I_SignUpScreen, { I_SignUpScreen2 } from './Individual/I_SignUp.js';
import I_SignInScreen from './Individual/I_SignIn.js';
import I_HomeScreen from './Individual/I_Home.js';
//Import of Club Screens:
import C_SignUpScreen, { C_SignUpScreen2 } from './Club/C_SignUp.js';
import C_SignInScreen from './Club/C_SignIn.js';
import C_HomeScreen from './Club/C_Home.js';
import ProfileScreen from './Club/C_Profile.js';
import CreateOppScreen from './Club/C_Create.js';
//Import of CSS:
import styles from './Style.js';


const Stack = createNativeStackNavigator();

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/CaringHeels.png')} />
      <Text style={styles.appName}>CaringHeels</Text>
      <Text style={styles.homeSubtitles}>I am a student:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('I_SignUp')}
      >
        <Text style={styles.buttonText}>Sign up as an Individual</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('I_SignIn')}
      >
        <Text style={styles.buttonText}>Sign in as an Individual</Text>
      </TouchableOpacity>
      <Text style={styles.homeSubtitles}>I am a club or organization:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('C_SignUp')}
      >
        <Text style={styles.buttonText}>Sign up as a Club</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('C_SignIn')}
      >
        <Text style={styles.buttonText}>Sign in as a Club</Text>
      </TouchableOpacity>
    </View>
  );
};


const App = () => {
  //create opportunity list in C_Home
  const [opportunities, setOpportunities] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="I_SignUp" component={I_SignUpScreen} />
        <Stack.Screen name="I_SignUp2" component={I_SignUpScreen2} />
        <Stack.Screen name="I_SignIn" component={I_SignInScreen} />
        <Stack.Screen name="C_SignUp" component={C_SignUpScreen} />
        <Stack.Screen name="C_SignUp2" component={C_SignUpScreen2} />
        <Stack.Screen name="C_SignIn" component={C_SignInScreen} />
        <Stack.Screen name="I_Home" component={I_HomeScreen} />
        <Stack.Screen name="C_Home" component={C_HomeScreen} 
          //initialParams={{clubName,opportunities}}
        />
        <Stack.Screen name="Create" component={CreateOppScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;