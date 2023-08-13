/* Club's Homescreen*/

import React from 'react';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page!</Text>
        <Text style={styles.buttonText}>Volunteering Opportunity</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Vol')}
      >
        <Text style={styles.buttonText}>Volunteering Opportunity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Don')}
      >
        <Text style={styles.buttonText}>Donation Opportunity</Text>
      </TouchableOpacity>      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('His')}
      >
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const Volunteer = () => {
  const [oppName, setOpportunityName] = useState('');
  const [oppDate, setOpportunityDate] = useState('');
  const [oppTimeFrom, setOpportunityTimeFrom] = useState('');
  const [oppTimeTo, setOpportunityTimeTo] = useState('');
  const [oppLocation, setOpportunityLocation] = useState('');
  const [repName, setRepName] = useState('');
  const [repPhoneNumber, setRepPhoneNumber] = useState('');
  const [repEmail, setRepEmail] = useState('');
  const [oppDescription, setOpportunityDescription] = useState('');

  const navigation = useNavigation();

  const handlePostOpportunity = () => {
    console.log('Opportunity Name:', oppName);
    console.log('Opportunity Date:', oppDate);
    console.log('Opportunity Time From:', oppTimeFrom);
    console.log('Opportunity Time To:', oppTimeTo);
    console.log('Opportunity Location:', oppLocation);
    console.log('Representative Name:', repName);
    console.log('Representative Phone Number:', repPhoneNumber);
    console.log('Representative Email:', repEmail);
    console.log('Opportunity Description:', oppDescription);

    navigation.navigate('His', {
      oppName,
      oppDescription,
      repName,
      repPhoneNumber,
      repEmail,
      oppDate,
      oppTimeFrom,
      oppTimeTo,
      oppLocation,
    });

    // add further logic to post the opportunity data to your backend here.
  };

  return (
    <View style={styles.container}>
      <Text>Create Volunteering Opportunity</Text>
      <TextInput
        style={styles.input}
        placeholder="Opportunity Name"
        value={oppName}
        onChangeText={(text) => setOpportunityName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Date"
        value={oppDate}
        onChangeText={(text) => setOpportunityDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Time (From)"
        value={oppTimeFrom}
        onChangeText={(text) => setOpportunityTimeFrom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Time (To)"
        value={oppTimeTo}
        onChangeText={(text) => setOpportunityTimeTo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Location"
        value={oppLocation}
        onChangeText={(text) => setOpportunityLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Representative Name"
        value={repName}
        onChangeText={(text) => setRepName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Representative Phone Number"
        value={repPhoneNumber}
        onChangeText={(text) => setRepPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Representative Email"
        value={repEmail}
        onChangeText={(text) => setRepEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Description"
        value={oppDescription}
        onChangeText={(text) => setOpportunityDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePostOpportunity}>
        <Text style={styles.buttonText}>Post Opportunity</Text>
      </TouchableOpacity>

    </View>
  );
};

const Donate = () => {
  return (
    <View style={styles.background}>
      <Text>Create Donation Opportunity</Text>
    </View>
  );
};


const History = ({ route }) => {
  const { oppName, oppDescription, repName, repPhoneNumber, repEmail, 
    oppDate, oppTimeFrom,oppTimeTo, oppLocation, } = route.params;

  return (
    <View style={styles.background}>
      <Text>View Club's Volunteering and Donation History</Text>
      <Text style={styles.oppName}>{oppName}</Text>
      <Text style={styles.oppDescription}>{oppDescription}</Text>
      <Text style={styles.oppInfo}>{repName}</Text>
      <Text style={styles.oppInfo}>{repPhoneNumber}</Text>
      <Text style={styles.oppInfo}>{repEmail}</Text>
      <Text style={styles.oppInfo}>{oppDate}</Text>
      <Text style={styles.oppInfo}>{oppTimeFrom}</Text>
      <Text style={styles.oppInfo}>{oppTimeTo}</Text>
      <Text style={styles.oppInfo}>{oppLocation}</Text>
    </View>
  );
};

// console.log('Opportunity Name:', oppName);
// console.log('Opportunity Date:', oppDate);
// console.log('Opportunity Time From:', oppTimeFrom);
// console.log('Opportunity Time To:', oppTimeTo);
// console.log('Opportunity Location:', oppLocation);
// console.log('Representative Name:', repName);
// console.log('Representative Phone Number:', repPhoneNumber);
// console.log('Representative Email:', repEmail);
// console.log('Opportunity Description:', oppDescription)

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Vol" component={Volunteer} />
        <Stack.Screen name="Don" component={Donate} />
        <Stack.Screen name="His" component={History} />
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  oppName: {
    color: '#13294B',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  oppDescription: {
    width: '#F8F8F8',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  oppInfo: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  background: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: '500',
  },
});

export default HomeScreen;

