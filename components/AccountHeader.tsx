import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountHeader = () => {
    return (
        <SafeAreaView style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ fontSize: 22, fontWeight: "500", fontFamily: 'Railway2', }}>My Account</Text>
            </View>
        </SafeAreaView>
    )
}

export default AccountHeader