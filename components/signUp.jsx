import React from 'react';
import {Text,
     ImageBackground,
     ScrollView,
     Dimensions,
     View,
     Button,
      StyleSheet,
      Pressable,
      TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import CheckBox from 'react-native-check-box';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const signUp =()=>{
    return(
        <>
<ScrollView style={{flex:1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
<ImageBackground source={require('../images/background1.png')}
style={{height:Dimensions.get('window').height / 3.5}}>
</ImageBackground>

{/*Bottom View*/}

<View style={styles.bottomView}>

<View style={{padding:40}}>
<Text style= {{fontWeight:'bold', color:'#0b1674', fontSize:30, bottom:35, right:20 }}> Sign Up</Text>

{/*FormInputs View*/}

<View style={styles.inputContainer}>

<View>
    <View style={{bottom:40}}>
<Text style={styles.textdes}>First Name</Text>
<View style={{flexDirection:'row', borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.2,
      height:height / 18.2,
      padding: 10,
      borderRadius:30,
      right:10}}>
<FontAwesome name='user' size={20} color='#0b1674' />
<TextInput style={{marginLeft:30}}
/>

</View>
</View>

<View>
    <View style={{bottom:30}}>
<Text style={styles.textdes}>Last Name</Text>
<View style={{flexDirection:'row', borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.2,
      height:height / 18.2,
      padding: 10,
      borderRadius:30,
      right:10}}>
<FontAwesome name='user' size={20} color='#0b1674' />
<TextInput style={{marginLeft:30}}
/>

</View>
</View>
</View>


<View>
    <View style={{bottom:20}}>
<Text style={styles.textdes}>Email Address</Text>
<View style={{flexDirection:'row', borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.2,
      height:height / 18.2,
      padding: 10,
      borderRadius:30,
      right:10}}>
<FontAwesome name='envelope' size={20} color='#0b1674' />
<TextInput style={{marginLeft:30}}
/>

</View>
</View>
</View>



<View>
    <View style={{bottom:10}}>
<Text style={styles.textdes}>Password</Text>
<View style={{flexDirection:'row', borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.2,
      height:height / 18.2,
      padding: 10,
      borderRadius:30,
      right:10}}>
<FontAwesome name='lock' size={20} color='#0b1674' />
<TextInput style={{marginLeft:30}}
/>

</View>
</View>
</View>



    <View style={{bottom:2}}>
<Text style={styles.textdes}>Confirm Password</Text>
<View style={{flexDirection:'row', borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.2,
      height:height / 18.2,
      padding: 10,
      borderRadius:30,
      right:10}}>
<FontAwesome name='lock' size={20} color='#0b1674' />
<TextInput style={{marginLeft:30}}
/>

</View>
</View>


<View style={{flexDirection:'row'}}>
    <Text style={{fontWeight:'bold', color:'gray', top:20}}>I Have Read The T'Cs</Text>
</View>

<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>Sign In </Text>
    
    
    </TouchableOpacity>



</View>
</View>

</View>
</View>

</ScrollView>
</>
    )
}

export default signUp

const {width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inner: {
        width:'193px',
        height:'80px',
        top:'350px',

    },

    bottomView:{
  flex:1.5,
  backgroundColor:'#fff',
  bottom:50,
  borderTopStartRadius: 40,
  borderTopEndRadius: 40,
  },

  input:{
      borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.3,
      padding: 10,
    
    },

    inputContainer:{
        top:20
  
    },

    textdes:{
        fontWeight:'bold',
    paddingBottom:10,
        color:'#0b1674',
 },

 
 button:{
    width:width / 1.3,
    height:height / 18.3,

    borderRadius:10,
    alignItems:'center',
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor:'#0b1674',
    top:30,
},

 buttonText: {
    fontSize: 20,
    color: '#ff6e1a',
    fontWeight: 'bold',

 },

})