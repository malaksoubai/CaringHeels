import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

const I_SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={styles.container}>
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
        keyboardType="email address"
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
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
export default I_SignUpScreen;


// const I_SignUpScreen = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');

//   const handleSignUp = () => {
//       console.log('Sign up for Individuals:', {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       password,
//       passwordConfirmation,
//     });
//   };

//   return (
//     <View style={style.container}>
//       <Text style={style.title}>Sign up for Individuals</Text>
//       <TextInput
//         style={style.input}
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={setFirstName}
//       />
//       <TextInput
//         style={style.input}
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={setLastName}
//       />
//       <TextInput
//         style={style.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={style.input}
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         style={style.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={style.input}
//         placeholder="Confirm Password"
//         value={passwordConfirmation}
//         onChangeText={setPasswordConfirmation}
//         secureTextEntry
//       />
//       {/* <TouchableOpacity style={style.button} onPress={handleSignUp}>
//         <Text style={style.buttonText}>Sign Up</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// export const { handleSignUp } = I_SignUpScreen();

// // const Backarrow = () => {
// //   return (
// //     <View style={style.arrowContainer}>
// //       <Image source={require('./assets/backarrow-icon.png')} style={style.arrowImage} />
// //     </View>
// //   );
// // };

// const style = StyleSheet.create({
//   arrowContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrowImage: {
//     width: 20, // Adjust the width and height according to your needs
//     height: 20,
//     tintColor: 'white', // Set the color of the arrow icon
//   },
// // });

// // export default Backarrow;

// // const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F8F8F8',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 200,
//     marginBottom: 20,
//     color: '#FFFFFF',
//   },
//   input: {
//     color: '#4B9CD3',
//     width: '100%',
//     height: 40,
//     borderColor: '#000000',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   button: {
//     width: '100%',
//     height: 40,
//     backgroundColor: '#13294B',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 200,
//   },
// });

// export default I_SignUpScreen;
