import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {

  const [cartItems, setCartItems] = useState<any>([])

  const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('cuisines');
        return setCartItems(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        console.log(e)
      }
  };

  useEffect(() => {
      getData();
  },[]);


  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    Railway1: require('../../assets/fonts/Raleway-Regular.ttf'),
    Railway2: require('../../assets/fonts/Raleway-Bold.ttf'),
    Railway3: require('../../assets/fonts/Raleway-SemiBold.ttf'),
    ...FontAwesome.font,

  });
  
  return (
    <Tabs screenOptions={{
      
      headerShown : false,

      tabBarStyle : {
        backgroundColor : 'white',
        height : 75
      }
    }}>

      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel : false,
          tabBarLabel: "Home",
          tabBarLabelStyle : {
            fontSize : 13,
            paddingBottom : 10
            
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>

              <AntDesign
                size={focused ? 25 : 23}
                style={{ marginBottom: -3, textAlign : 'center', }}
                name="home"
                color={focused ? Colors.btnGreen : 'gray'}
              />
              <Text style={{fontFamily : 'Railway3', paddingTop : 5, color : 'gray', fontSize : 12}}>Home</Text>
            </View>
          ),
        }}
      />



    <Tabs.Screen
        name="carts"
        options={{
          tabBarShowLabel : false,
          tabBarLabel: "Home",
          tabBarLabelStyle : {
            fontSize : 13,
            paddingBottom : 10
            
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={{position : 'relative'}}>

              { cartItems === null || cartItems.length === 0 ? '' : (
                <FontAwesome name='circle' 
                  size={6} color={'red'} 
                  style={{position : 'absolute', right : -5, top : 2,}}
                />
              )}

              <Ionicons
                size={focused ? 30 : 25}
                style={{ marginBottom: -3, textAlign : 'center' }}
                name="basket-outline"
                color={focused ? Colors.btnGreen : 'gray'}
              />
              <Text style={{fontFamily : 'Railway3', paddingTop : 5, color : 'gray', fontSize : 12}}>Carts</Text>
            </View>
          ),
        }}
      />

    <Tabs.Screen
        name="order"
        options={{
          tabBarShowLabel : false,
          tabBarLabel: "Home",
          tabBarLabelStyle : {
            fontSize : 13,
            paddingBottom : 10
            
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View >
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign : 'center' }}
                name="bag-outline"
                color={focused ? Colors.btnGreen : 'gray'}
              />
              <Text style={{fontFamily : 'Railway3', paddingTop : 5, color : 'gray', fontSize : 12}}>Orders</Text>
            </View>
          ),
        }}
      />


    <Tabs.Screen
        name="account"
        options={{
          tabBarShowLabel : false,
          tabBarLabel: "Home",
          tabBarLabelStyle : {
            fontSize : 13,
            paddingBottom : 10
            
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign : 'center' }}
                name="user-circle"
                color={focused ? Colors.btnGreen : 'gray'}
              />
              <Text style={{fontFamily : 'Railway3', paddingTop : 5, color : 'gray', fontSize : 12}}>Account</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({

})