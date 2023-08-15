import { StyleSheet} from 'react-native';


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
    startPageEmail: {
      color: 'white',
      fontSize: 15,
      textDecorationLine: 'underline',
    },
    email: {
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
      borderColor: '#13294B',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    box: {
      textAlignVertical: 'top',
      width: '100%',
      height: 100,
      borderColor: '#13294B',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
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
    },
    profileIcon: {
      // marginBottom: 20,
      marginLeft: 270,
    },
    editprofileIcon: {
      flex: 1,
      alignItems: 'center',
    },
    createButton: {
      marginBottom: 10,
      padding: 40,
      alignItems: 'center',
      borderWidth: 2,
      borderStyle:'dashed',
    },
    user:{
      color: '#13294B',
      fontSize: 30,
      marginTop: 10,
      marginBottom: 40,
      textAlign: 'center',
    },
    greytext:{
      color: 'grey',
      fontSize: 15,
      // marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
    },
    bluetext:{
      color: '#4B9CD3',
      fontSize: 15,
      // marginTop: 10,
      marginBottom: 40,
      textAlign: 'center',
    },
    picker: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
    },
    footer: {
      marginTop: '30%',
      // backgroundColor: 'grey',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      marginBottom: '5%',
      padding: '5%',
      height: '10%',
      justifyContent: "center",
    },
  });

export default styles; 