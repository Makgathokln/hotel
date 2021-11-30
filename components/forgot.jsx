import React from 'react';
import {Text, ImageBackground,ScrollView, Dimensions,View,Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const forgot =()=>{
    return(
        <>
<ScrollView style={{flex:1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
<ImageBackground source={require('../images/background1.png')}
style={{height:Dimensions.get('window').height / 2.1}}>
</ImageBackground>

{/*Bottom View*/}

<View style={styles.bottomView}>

<View style={{padding:40}}>
<Text style= {{fontWeight:'bold', color:'#0b1674', fontSize:30, top:10 }}> Forgot Your Password?</Text>
<Text style={{color:'#807878', paddingTop:20}}>Enter Your Email Address And We Will Email You A Link To Reset Your Password</Text>

<View>
<Text style={styles.textdes}>Email Address</Text>

<TextInput style={{ borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.1,
      padding: 10,
      borderRadius:30,
      right:20,
      top:20
      }}
/>
</View>

</View>
</View>

</ScrollView>
</>
    )
}

export default forgot

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
textdes:{
    fontWeight:'bold',
paddingTop:20,
    color:'#0b1674',
    bottom:60,
},



})