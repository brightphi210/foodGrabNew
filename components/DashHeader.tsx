import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context'

const DashHeader = () => {
  return (
   <SafeAreaView style={{display : 'flex', alignItems : 'center', flexDirection : 'row'}}>
        
        <TouchableOpacity>
          <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 5}}>
              <Ionicons name='location-outline' size={20} color={Colors.myLightGreen}/>
              <Text style={{fontFamily : 'Railway3', fontSize : 15, paddingLeft : 5}}>Iwofe, Port Harcourt</Text>
              <Ionicons name='chevron-down' size={20}/>
          </View>
        </TouchableOpacity>

        <View style={{marginLeft : 'auto'}}>
            <Ionicons name='notifications-outline' size={20}/>
        </View>
   </SafeAreaView>
  )
}

export default DashHeader