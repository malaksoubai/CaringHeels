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
      color: '#F8F8F8',
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
      color: '#007FAE',
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
      marginTop: 30,
      marginLeft: 300,
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
      borderRadius: '5'
    },
    user:{
      color: '#13294B',
      fontSize: 25,
      marginTop: 5,
      marginBottom: 20,
      textAlign: 'center',
    },
    opp:{
      color: '#13294B',
      fontSize: 25,
      marginTop: 15,
      marginBottom: 15,
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
    iHomeBG: {
      flex: 1,
      color: '#F8F8F8',
      // alignItems: 'right',
      // justifyContent: 'flex-start',
      margin: 20,
    },
    cards: {
      // marginTop: '30%',
      flexDirection: 'row',
      justifyContent: 'space-between',
 
      backgroundColor: 'white',
      alignItems: 'center',
      // verticalAlign: 'center',
      borderRadius: 5, 
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginBottom: 15,
      borderColor: '#d2d2d2', //or '#13294B'
      borderWidth: '1',
      shadowColor: '#d2d2d2',
      shadowOpacity: '100',
    },
    learnCard: {
      marginTop: '15%',
      marginLeft:'5%',
      marginRight:'5%',
      backgroundColor: 'white',
      alignItems: 'center',
      // verticalAlign: 'center',
      borderRadius: 5, 
      paddingVertical: 300,
      paddingHorizontal: 20,
      marginBottom: '15%',
      borderColor: '#13294B',
      borderWidth: '1',
      // shadowColor: '#d2d2d2',
      // shadowOpacity: '100',
    },
    locoIcon: {
      // marginTop: '30%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locoLeft: {
      flex: 1,
      marginRight: 1,
    },
    locoRight: {
      flex: 5,
      marginLeft: 1,
    },
    leftColumn: {
      flex: 2,
      marginRight: 5,
    },
    rightColumn: {
      flex: 3,
      marginLeft: 5,
    },
    clubName: {
      fontSize: 14,
      marginBottom: 10,
    },
    eventTitle: {
      fontSize: 20,
      color:'#4B9CD3',
      marginBottom: 7,
    },
    notice: {
      fontSize: 12,
      marginTop: 10,
    },
    date: {
      fontSize: 12,
    },
    location: {
      fontSize: 12,
      // marginTop: 4,
    },
    teaser: {
      fontSize: 14,
      marginTop: 4,
      fontStyle: 'italic',
    },
    more: {
      fontSize: 14,
      color: '#4B9CD3',
      marginTop: 5,
      marginLeft: 100,
    },
    timeIcon: {
      color: 'white',
    },
    underLine: {
      borderBottomColor: '#13294B',
      marginBottom: '15%',
      paddingBottom: 0,
      // alignItems: 'center',
      borderBottomWidth: 1,
      // padding: '5%',
      // height: '10%',
      // justifyContent: "center",
    }
  });

export default styles; 