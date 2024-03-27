import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const welcome_three = () => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor :'gray'}}>
        <StatusBar style='dark'/>
      <View style={styles.container}>
        <Image source={require('../../assets/images/logimg.png')} style={styles.imgStyle}/>

        {/* ========= Text =============== */}
        
        <Link href={'/register'} asChild>        
          <TouchableOpacity style={styles.btnStyles1}>
              <Text style={{fontSize : 18, color : 'white', fontFamily : 'Railway2'}}>Get Started</Text>
            </TouchableOpacity>
        </Link>

        <Link href={'/login'} asChild>        
          <TouchableOpacity style={styles.btnStyles}>
              <Text style={{fontSize : 18, color : Colors.myGreen, fontFamily : 'Railway2'}}>Login</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default welcome_three

const styles = StyleSheet.create({
  container : {
      flex : 1,
      width : '100%',
      justifyContent : 'center',
      alignItems : 'center',
      paddingHorizontal : 20,
      backgroundColor : 'white',
  },

  imgStyle : {
    width : 260,
    height : 260,
    alignSelf : 'center',
  },


  btnStyles1 :{
    height : 50,
    backgroundColor : Colors.myRed,
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 20,
    marginHorizontal : 30,
    justifyContent : 'center',
    borderRadius : 10,    
    marginTop : 150, 
    width : '95%'
  },

  btnStyles :{
    position : 'absolute',
    bottom : 50,
    left : 0,
    right : 0,
    height : 50,
    backgroundColor : 'white',
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 20,
    marginHorizontal : 30,
    justifyContent : 'center',
    borderRadius : 10,   
    borderColor : Colors.myGreen,
    borderWidth : 1,  
  }
})