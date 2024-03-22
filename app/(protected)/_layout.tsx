import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {

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
        height : 60
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
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign : 'center', }}
                name="home-outline"
                color={focused ? Colors.myGreen : 'gray'}
              />
              <Text style={{color : focused ? Colors.myGreen : 'gray', marginLeft : 0, fontFamily : 'Railway1', fontSize : 12}}>Home</Text>
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
            <View>
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign : 'center' }}
                name="cart-outline"
                color={focused ? Colors.myGreen : 'gray'}
              />
              <Text style={{color : focused ? Colors.myGreen : 'gray', marginLeft : 0, fontFamily : 'Railway1', fontSize : 12}}>Cart</Text>
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
            <View>
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign : 'center' }}
                name="bag-outline"
                color={focused ? Colors.myGreen : 'gray'}
              />
              <Text style={{color : focused ? Colors.myGreen : 'gray', marginLeft : 0, fontFamily : 'Railway1', fontSize : 12, textAlign : 'center'}}>Order</Text>
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
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign : 'center' }}
                name="person-outline"
                color={focused ? Colors.myGreen : 'gray'}
              />
              <Text style={{color : focused ? Colors.myGreen : 'gray', marginLeft : 0, fontFamily : 'Railway1', fontSize : 12, textAlign : 'center'}}>Account</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({

})