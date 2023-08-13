import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import I_SignInScreen from '../indiv_in';
// import I_SignUpScreen from '../indiv_up';


const Stack = createNativeStackNavigator();

/*const BackButton = ({ navigation, targetScreen, style }) => {
  const handleBackPress = () => {
    navigation.navigate(targetScreen); // Navigate to the specified target screen
  };

  return (
    <TouchableOpacity style={[style.backButton, style]} onPress={handleBackPress}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );};*/

const StartScreen = ({ navigation }) => {
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

const I_SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('I_Home');

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={StartScreen}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
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
    </View>
  );
};

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
    navigation.navigate('I_Home');
  };

  return (
    <View style={styles.container}>
      {/*<BackButton navigation={navigation} targetScreen="Start" />*/}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      {/* displays error message when the pazzword and confirm password are diff */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};


// const I_SignUpScreen = () => {  // move this to a new page and connect them both
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={style.button} onPress={handleSignUp}>
//         <Text style={style.buttonText}>Sign Up for Individuals</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const I_SignInScreen = () => {
//   return (
//     <View style={styles.background}>
//       <Text>Sign In Page for Individuals</Text>
//     <div class="back-arrow">
//     <a href="javascript:history.back()" class="arrow-link">
//       <img src="white-arrow.png" alt="Back Arrow"/>
//     </a>
//     </div>
//     </View>
//   );
// };

const C_SignUpScreen = ({navigation}) => { //call upon clubName??
  const [clubName, setClubName] = useState('');
  const [clubEmail, setClubEmail] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [cConfirmPassword, setCConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleC_SignUp = () => {
    if (password !== confirmPassword) {
      // Display an error message or handle the mismatch
      setErrorMessage("Passwords don't match"); 
      return;
    }

    console.log('Club Name:', clubName);
    console.log('Club Email:', clubEmail);
    console.log('Password:', cPassword);
    console.log('Confirm Password:', cConfirmPassword);
    setErrorMessage(''); // Clear the error message
    navigation.navigate('C_Home'); // Should this be here and in and in handleSignUp?
  }

  const handleSignUp = () => {
    handleC_SignUp();
    navigation.navigate('C_Home');
  }

  return (
    <View style={styles.container}>
      {/*<Button onPress={StartScreen}> <Text style={styles.buttonText}>Back</Text> </Button>*/}
      <TextInput
        style={styles.input}
        placeholder="Club Name"
        value={clubName}
        onChangeText={(text) => setClubName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Club Email"
        value={clubEmail}
        onChangeText={(text) => setClubEmail(text)}
       keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={cPassword}
        onChangeText={(text) => setCPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
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
  </View>
  );
};

const C_SignInScreen = () => {
  const [clubName, setClubName] = useState('');
  const [cPassword, setCPassword] = useState('');

  const handleC_SignIn = () => {
    console.log('Club Name:', clubName);
    console.log('Password:', cPassword);

  }
  return (
    <View style={styles.background}>
      <Button onPress={StartScreen}>
        <Text style={styles.buttonText}>Back</Text>
      </Button>
      <Text>Sign in as a club</Text>
      <Button onPress={StartScreen}>
        <Text style={styles.buttonText}>Back</Text>
      </Button>
      <TextInput
        style={styles.input}
        placeholder="Club Name"
        value={clubName}
        onChangeText={(text) => setClubName(text)}
      />
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
  </View>
  );
};

const I_HomeScreen = () => {
  return(
    <View style={styles.background}>
      <Text>Welcome back!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Volunteer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>
      </View>
  );
}

const C_HomeScreen = ({route}) => {
  const {clubName} = route.params;
  return(
    <View style={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <Text>Welcome back, {clubName}!</Text> {/*call the club Name from C_SignUpScreen OR C_SignInScreen*/}
      <Text>Opportunities</Text>
      {/*I want the opportunities once posted, to be viewed here with the ability to be deleted*/}
      <TouchableOpacity onPress={() => navigation.navigate('C_Volunteer')}>
        <Text>Create Volunteering Opportunity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('C_Donate')}>
        <Text>Donate</Text>
      </TouchableOpacity>
      </View>
  );
}

const ProfileScreen = () => {
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
    
    navigation.navigate('C_Home', {clubName});
    navigation.navigate('C_Volunteer', {clubName});
  }
  return(
    <View style={styles.background}>
      {/*<Button onPress={C_HomeScreen}>
        <Text style={styles.buttonText}>Back</Text>
  </Button>*/}
      <Text>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Club Name"
        value={clubName}
        onChangeText={(text) => setClubName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Club Email"
        value={clubEmail}
        onChangeText={(text) => setClubEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={clubNum}
        onChangeText={(text) => setClubNum(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Club Website"
        value={clubWeb}
        onChangeText={(text) => setClubWeb(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Social Media"
        value={clubSM}
        onChangeText={(text) => setClubSM(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Club Description, mission, etc."
        value={clubDes}
        onChangeText={(text) => setClubDes(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleProfile}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const VolunteerScreen = ({route}) => {
  const {clubName} = route.params;
  const [oppName, setOppName] = useState('');
  const [oppDate, setOppDate] = useState('');
  const [oppTime, setOppTime] = useState('');
  const [oppLocation, setOppLocation] = useState('');
  const [oppDescription, setOppDescription] = useState('');

  const handleVolOpp = () => {
    console.log('Opp. Title:', oppName);
    console.log('Opp. Date:', oppDate);
    console.log('Opp. Time:', oppTime);
    console.log('Opp. Location:', oppLocation);
    console.log('Opp. Description:', oppDescription);
  }

  const handlePost = () => {
    handleVolOpp();
    // Update the opportunities list with the new opportunity
    setOpportunities(prevOpportunities => [
      ...prevOpportunities,
      {
        club: clubName, //Do I need to put {} in clubName?
        name: oppName,
        date: oppDate,
        time: oppTime,
        location: oppLocation,
        description: oppDescription,
      }
    ]);

  navigation.navigate('C_Home', { clubName, opportunities });
  }

  return(
    <View style={styles.background}>
      {/*<Button onPress={C_HomeScreen}>
        <Text style={styles.buttonText}>Back</Text>
  </Button>*/}
      <Text>Create a Volunteering Opportunity</Text>
      <TextInput
        style={styles.input}
        placeholder="Opportunity Name"
        value={oppName}
        onChangeText={(text) => setOppName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="i.e. 01/01/2023"
        value={oppDate}
        onChangeText={(text) => setOppDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="i.e  From 11:00 A.M To 3:00 PM"
        value={oppTime}
        onChangeText={(text) => setOppTime(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Location"
        value={oppLocation}
        onChangeText={(text) => setOppLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Opportunity Description"
        value={oppDescription}
        onChangeText={(text) => setOppDescription(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handlePost}
      >
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  )
}

const DonateScreen = () => {
  const {clubName} = route.params;
  const [oppName, setOppName] = useState('');
  const [oppDate, setOppDate] = useState('');
  const [donCategories, setDonCategories] = useState(''); //Donation Categories: monetary, clothing, in-kind (time, supplies, etc.)
  const [oppGoal, setOppGoal] = useState('');
  const [oppDescription, setOppDescription] = useState('');

  const handleVolOpp = () => {
    console.log('Opp. Title:', oppName);
    console.log('Opp. Date:', oppDate);
    console.log('Opp. Time:', oppTime);
    console.log('Opp. Goal:', oppGoal);
    console.log('Opp. Description:', oppDescription);
  }
  return(
    <View>
      
    </View>
  )
}



const App = () => {
  //create opportunity list in C_Home
  const [opportunities, setOpportunities] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="I_SignUp" component={I_SignUpScreen} />
        <Stack.Screen name="I_SignIn" component={I_SignInScreen} />
        <Stack.Screen name="C_SignUp" component={C_SignUpScreen} />
        <Stack.Screen name="C_SignIn" component={C_SignInScreen} />
        <Stack.Screen 
          name="I_Home" 
          component={I_HomeScreen} 
        />
        <Stack.Screen 
          name="C_Home" 
          component={C_HomeScreen} 
          //initialParams={{clubName,opportunities}}
        />
        <Stack.Screen name="C_Volunteer" component={VolunteerScreen} />
        <Stack.Screen name="C_Donate" component={DonateScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  input: {
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
  appName: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 50,
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
  backText: {
    color: '#FFFFFF',
    fontsize: 16,
    textDecorationLine: 'underline',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  }
});

export default App;