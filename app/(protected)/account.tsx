import { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, Ionicons, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router"

import AccountHeader from '@/components/AccountHeader';
import Colors from '@/constants/Colors';
import { AuthContext } from '@/context/AuthContext';
import { StatusBar } from 'expo-status-bar';

const account = () => {
  const [image, setImage] = useState()

  const router = useRouter()
  const { userData, logout } = useContext(AuthContext)



  const uploadImage = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync()
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
      })

      if (!result.canceled) {
        saveImage(result.assets[0].uri)
      } else {
        alert('You did not select any image.');
      }
    } catch (error) {

    }
  }

  const saveImage = async (image : any) => {
    try {
      setImage(image)
    } catch (error) {
      throw error
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>
      <AccountHeader />

      <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
        <View style={styles.avatarContainer}>

          <View>
            {image ? (
              <Image source={{uri : image}} style={styles.image} />
            ) : (

            <Image source={require('../../assets/images/defaultProf.png')} style={styles.image} />
            )}
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => uploadImage()}>
            <MaterialCommunityIcons name="camera-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10, gap: 10 }}>
          <Text style={{ fontFamily: "Railway2", fontSize: 20, fontWeight: "600", color: "#1D2739" }}>Omowaye Gbotemi</Text>
          <Text style={{ textAlign: 'center', color: "#98A2B3", fontFamily: "Railway3" }}><Text style={{ color: Colors.myRed }}>56 </Text>Successful Order</Text>
        </View>

        <View style={{ width: "100%", marginTop: 50, flexDirection: 'column', gap: 40 }}>


            <TouchableOpacity style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }} onPress={()=> router.push('/authRoute/(profile)/personal')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <MaterialIcons name="perm-contact-cal" size={15} color={Colors.myRed} />
                <Text style={{ fontSize: 15, color: "#606060", fontFamily : 'Railway3'}}>Personal Information</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={13} color={Colors.myGray} />
            </TouchableOpacity>


            <TouchableOpacity onPress={()=> router.push('/authRoute/(profile)/wallet')} 
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <MaterialCommunityIcons name="wallet-outline" size={15} color={Colors.myRed} />
                <Text style={{ fontSize: 15, color: "#606060", fontFamily : 'Railway3'}}>Wallet (Payment)</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={13} color={Colors.myGray} />
            </TouchableOpacity>



            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Feather name="phone" size={15} color={Colors.myRed} />
                <Text style={{ fontSize: 15, color: "#606060", fontFamily : 'Railway3'}}>Support</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={13} color={Colors.myGray} />
            </TouchableOpacity>



            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AntDesign name="questioncircleo" size={15} color={Colors.myRed} />
                <Text style={{ fontSize: 15, color: "#606060", fontFamily : 'Railway3'}}>FAQs</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={13} color={Colors.myGray} />
            </TouchableOpacity>


          <TouchableOpacity onPress={logout} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <AntDesign name="logout" size={15} color={Colors.myRed} />
              <Text style={{ fontSize: 15, color: "#606060", fontFamily : 'Railway3'}}>Logout</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={13} color={Colors.myGray} />
          </TouchableOpacity>


        </View>
      </View>
    </SafeAreaView>
  )
}

export default account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 0,
  },
  avatarContainer: {
    alignItems: "center",
    position: "relative"
  },
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
    borderColor: Colors.myRed,
    borderWidth: 1
  },
  editButton: {
    backgroundColor: Colors.myRed,
    borderRadius: 24,
    padding: 8,
    position: "absolute",
    right: 0,
    top: -10
  }
})