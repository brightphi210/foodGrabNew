import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const BackHeader = () => {
    const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={router.back}>
        <Ionicons name='arrow-back' size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BackHeader

const styles = StyleSheet.create({
    container : {
        paddingVertical : 20
    }
})