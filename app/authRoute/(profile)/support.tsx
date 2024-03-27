import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BASE_URL } from '@/Enpoints/Endpoint'
import { useTheme } from '@react-navigation/native'

const support = () => {

    const [message, setMessage] =useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleSend = async () => {
        try {
            const res = await fetch(`${BASE_URL}sendMessage`, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({

                })
            })
        } catch (error) {
            
        }
    }
  return (
    <View>
      <Text>support</Text>
    </View>
  )
}

export default support

const styles = StyleSheet.create({})