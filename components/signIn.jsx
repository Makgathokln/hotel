import React from 'react';
import {Text, ImageBackground,ScrollView, Dimensions,View,Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const signIn =()=>{
    return(
        <>
<ScrollView style={{flex:1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
<ImageBackground source={require('../images/background1.png')}
style={{height:Dimensions.get('window').height / 2.5}}>
</ImageBackground>

{/*Bottom View*/}

<View style={styles.bottomView}>

<View style={{padding:40}}>
<Text style= {{fontWeight:'bold', color:'#0b1674', fontSize:30 }}> Sign In</Text>
<View>
    <TextInput/>
</View>

</View>
</View>

</ScrollView>
</>
    )
}

export default signIn

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
  borderTopEndRadius: 40,
    },
    textdes:{
        fontWeight:'bold',
    paddingBottom:10,
        color:'#0b1674',
 }


    
})