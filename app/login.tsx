import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View,  TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useNavigation, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import { BASE_URL } from '@/Enpoints/Endpoint';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
const register = () => {

    const {userToken} :any = useContext(AuthContext);

    const navigate = useRouter()
    // alert(userToken)


    const [showActive, setShowActiveColor] = useState(false)
    const [showInActive, setShowInActiveColor] = useState(true)

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState('');


    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };


    const showFunc = () =>{
        setShowActiveColor(true)
        setShowInActiveColor (false)
    }


    const hideFunc = () =>{
        setShowActiveColor(false)
        setShowInActiveColor (true)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async () => {
        setIsLoading(true);
      
        try {
          const response = await axios.post(`${BASE_URL}/signin`, { email, password });
          const data = response.data;
      
          if (data.status === 'SUCCESS') {
            const token = data.token; 
      
            await AsyncStorage.setItem('token', JSON.stringify(token));
            alert('Login successful');
            setIsLoading(false);
            navigate.replace('/home'); 
      
          } else {
            alert(`Login failed: ${data.message || 'An error occurred'}`); 
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Login failed. Please check your credentials or try again later.');
          setIsLoading(false);
        }
      };
      

    


  return (
    <SafeAreaView style={{flex : 1, backgroundColor : Colors.myRed}}>
        <StatusBar style='light'/>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{fontFamily : 'Railway2', fontSize : 25}}>Login</Text>
            <Text style={{fontFamily : 'Railway1', fontSize : 15}}>Welcome back, login to place your order today</Text>

            <View style={{
                display : 'flex', flexDirection :'row', 
                padding : 1, width : '100%', backgroundColor : Colors.myRed, 
                borderRadius : 5, marginTop : 15
            }}>
                <TouchableOpacity style={showInActive ? styles.active : styles.inActive} onPress={showFunc}>
                    <Text style={showInActive ? styles.activeColor : styles.inActiveColor}>Phone Number</Text>
                </TouchableOpacity>

                <TouchableOpacity style={showActive ? styles.active : styles.inActive} onPress={hideFunc}>
                    <Text style={showActive ? styles.activeColor : styles.inActiveColor}>Email Address</Text>
                </TouchableOpacity>
            </View>

            { 
                showActive ? 
                    <View style={{paddingTop : 0}}>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Phone Number</Text>
                            <TextInput placeholder='Phone Number : ' style={styles.inputStyles}/>
                        </View>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Password</Text>
                            <View>
                                <TextInput placeholder='Password:' 
                                    style={styles.inputStyles}
                                    secureTextEntry={!showPassword}
                                    value={ password}
                                />

                                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconStyle}>
                                    {showPassword ? 
                                        <Ionicons name='eye-off' size={20}/>
                                        :
                                        <Ionicons name='eye' size={20} /> 
                                    }
                                </TouchableOpacity>
                                
                            </View>
                        </View>

                    </View> 
                
                : 

                    <View style={{paddingTop : 0}}>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 13}}>Email address</Text>
                            <TextInput 
                                placeholder='Email address : ' 
                                style={styles.inputStyles}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Password</Text>
                        <View>
                            <TextInput placeholder='Password:' 
                                style={styles.inputStyles}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />

                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconStyle}>
                                {showPassword ? 
                                    <Ionicons name='eye-off' size={20}/>
                                    :
                                    <Ionicons name='eye' size={20} /> 
                                }
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    </View>
            }

            <TouchableOpacity style={styles.btnStyles} onPress={handleLogin}>
                <Text style={{fontSize : 15, fontFamily : 'Railway2', color : 'white'}}>{isLoading ? (<ActivityIndicator color={'white'}/>) : 'Signin'}</Text>
            </TouchableOpacity>

            <Text style={{textAlign : 'center', paddingTop : 10, fontSize : 13, fontFamily : 'Railway3',}}>
                Don’t have an account? 
                <Link href={'/register'}><Text style={{color : Colors.myRed}}>Sign up</Text></Link>
            </Text>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        marginTop : 50, 
        borderTopEndRadius : 20,
        borderTopLeftRadius : 20,
        paddingTop : 20,
        paddingHorizontal : 20,
    },

    active : {
        backgroundColor : Colors.myRed,
        padding : 13,
        paddingHorizontal : 20,
        width : '50%',
        borderRadius : 5
    },

    activeColor : {
        color : 'white',
        fontSize : 13, fontFamily : 'Railway3'
    },

    inActive : {
        backgroundColor : 'white',
        padding : 13,
        paddingHorizontal : 20,
        width : '50%',
        borderRadius : 5
    },

    inActiveColor : {
        color : Colors.myGreen,
        fontSize : 13, fontFamily : 'Railway3'
    },

    inputDiv : {
        paddingTop : 20,
        
    },

    inputStyles : {
        padding : 10,
        borderColor : Colors.myGray,
        borderWidth : 1,
        borderRadius : 5,
        fontSize : 15,
        position : 'relative',
        fontFamily :'Railway1'
    },

    btnStyles :{
        height : 50,
        backgroundColor : Colors.myRed,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        justifyContent : 'center',
        borderRadius : 10,  
        marginTop : 40,
    },

    iconStyle : {
        position : 'absolute',
        top : 15,
        right : 30,
    }
})