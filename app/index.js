import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartPage = () => {
  return (
    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
      <ActivityIndicator size={'large'}/>
      <Text style={{fontSize : 15, fontFamily : 'Railway3', paddingTop : 20}}>Getting data . . </Text>
    </View>
  )
}

export default StartPage

const styles = StyleSheet.create({})