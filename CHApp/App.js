import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/CaringHeels.png')} />
      <Text style={styles.appName}>CaringHeels</Text>
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

const I_SignUpScreen = () => {  // move this to a new page and connect them both
  return (
    <View style={styles.container}>
      <Text>Sign Up Page for Individuals</Text>
    </View>
  );
};

const I_SignInScreen = () => {
  return (
    <View style={styles.background}>
      <Text>Sign In Page for Individuals</Text>
    </View>
  );
};

const C_SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Page for Clubs</Text>
    </View>
  );
};

const C_SignInScreen = () => {
  return (
    <View style={styles.background}>
      <Text>Sign In Page for Clubs</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="I_SignUp" component={I_SignUpScreen} />
        <Stack.Screen name="I_SignIn" component={I_SignInScreen} />
        <Stack.Screen name="C_SignUo" component={C_SignUpScreen} />
        <Stack.Screen name="C_SignIn" component={C_SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B9CD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#13294B',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

