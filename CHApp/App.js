import React, { useState } from 'react';  //State is used to store and manage data within a component.
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Checkbox from './Checkbox.js';
// import Checkbox from 'expo-checkbox';


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

const I_SignUpScreen2 = ({navigation, route}) => { 
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

const I_SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('I_Home');

  };

  return (
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
  );
};

const C_SignUpScreen = ({navigation}) => { //call upon clubName??
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
    // navigation.navigate('C_SignUp2'); // Should this be here and in and in handleSignUp?
  }

  const handleSignUp = () => {
    handleC_SignUp();
    navigation.navigate('C_SignUp2');
  }

  return (
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
  );
};

const C_SignUpScreen2 = ({navigation}) => { //call upon clubName??
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
    console.log('UNC affiliated?:', setSelectedUncAffiliatedOption);
    console.log('volunteerOrDonate:', setSelectedVorDOptionsOption);
    console.log('clubLink:', setClubLink);
    console.log('clubDescription:', setClubDescription);
    navigation.navigate('C_Home');
  };

  return (
    <ScrollView style={styles.greyBackground}>
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
        keyboardType="club-link"
      />
      <Text style={styles.subtitles}>Provide a brief description of the club</Text>
      <TextInput
        style={styles.input}
        placeholder="Please specify your mission"
        value={clubDescription}
        onChangeText={(text) => setClubDescription(text)}
        keyboardType="club-description"
      />
     
      <TouchableOpacity
        style={styles.button}
        onPress={handleDone}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const C_SignInScreen = ({navigation}) => {
  const [clubEmail, setClubEmail] = useState('');
  const [cPassword, setCPassword] = useState('');

  const handleC_SignIn = () => {
    console.log('Club Email:', clubEmail);
    console.log('Password:', cPassword);

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

const I_HomeScreen = () => {
  return(
    <View style={styles.greyBackground}>
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
 // const {clubName} = route.params;
  // return(
  //   <View style={styles.background}>
  //     <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  //       <Text>Profile</Text>
  //     </TouchableOpacity>
  //     <Text>Welcome back, {clubName}!</Text> {/*call the club Name from C_SignUpScreen OR C_SignInScreen*/}
  //     <Text>Opportunities</Text>
  //     {/*I want the opportunities once posted, to be viewed here with the ability to be deleted*/}
  //     <TouchableOpacity onPress={() => navigation.navigate('C_Volunteer')}>
  //       <Text>Create Volunteering Opportunity</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={() => navigation.navigate('C_Donate')}>
  //       <Text>Donate</Text>
  //     </TouchableOpacity>
  //     </View>
  // );
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
        <Stack.Screen name="I_SignUp2" component={I_SignUpScreen2} />
        <Stack.Screen name="I_SignIn" component={I_SignInScreen} />
        <Stack.Screen name="C_SignUp" component={C_SignUpScreen} />
        <Stack.Screen name="C_SignUp2" component={C_SignUpScreen2} />
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
    display: 'flex',
    flex: 1,
    backgroundColor: '#4B9CD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyBackground: {
    flex: 1,
    // alignItems: 'right',
    // justifyContent: 'flex-start',
    margin: 50,
  },
  title:{
    color: '#13294B',
    fontSize: 30,
    marginTop: 50,
    marginBottom: 70,
    alignItems: 'center',
  },
  subtitles: {
    color: '#4B9CD3',
    fontSize: 20,
  },
  homeSubtitles: {
    color: 'white',
    fontSize: 15,
  },
  link: {
    color: '#4B9CD3',
    fontSize: 15,
    textDecorationLine: 'underline',
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
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
  backButton: {
    color: '#4B9CD3',
    fontSize: 15,
    backgroundColor: '#4B9CD3',
  },
  containerBack: {
    width: '30%',
  }, 
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signup2Text: {
    marginBottom: 20,
  }
});

export default App;