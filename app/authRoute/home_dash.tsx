import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashHeader from '@/components/DashHeader';
import { Link, useRouter } from 'expo-router'

// import DashHeader from '../../components/DashHeader';

const index = () => {
    const router = useRouter()
    
    const handlePress =() =>{
        router.replace('/(protected)/home')
    }
  return (
    <SafeAreaView style={styles.container}>
        <DashHeader />
        <View>

            <View style={{paddingVertical : 10, paddingBottom : 0}}>
              <Image source={require('../../assets/images/dashSec1.png')}
                style={styles.imageDIv}
              />
            </View>


            <View style={{display: 'flex', paddingTop : 20, paddingHorizontal : 10, flexDirection : 'row', alignItems : 'center', justifyContent : 'center', gap : 10}}>
              
              

                <TouchableOpacity style={styles.imageDIvBorder} onPress={handlePress}>
                  <View>
                    <Image source={require('../../assets/images/foodSearch.png')}
                      style={{width : 130, height : 90, alignSelf : 'center'}}
                    />
                    <Text style={{textAlign : 'center', fontFamily : 'Railway2', fontSize : 15}}>Food</Text>
                  </View>
                </TouchableOpacity>

              <TouchableOpacity style={styles.imageDIvBorder}>
                <View>
                  <Image source={require('../../assets/images/storeSearch.png')}
                    style={{width : 100, height : 100, alignSelf : 'center'}}
                  />
                  <Text style={{textAlign : 'center', fontFamily : 'Railway2', fontSize : 15,}}>Restaurant</Text>
                </View>
              </TouchableOpacity>
            </View>
            

            <TouchableOpacity style={styles.imageDIvBorder2}>
                <View>
                  <Image source={require('../../assets/images/explore.png')}
                    style={{width : 100, height : 80, alignSelf : 'center'}}
                  />
                  <Text style={{textAlign : 'center', fontFamily : 'Railway2', fontSize : 15, paddingTop : 20}}>Explore the app</Text>
                </View>
            </TouchableOpacity>

        </View>
    </SafeAreaView>

  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
        paddingTop :50,
        paddingHorizontal: 20
    },

    imageDIv : {
      width : '100%',
      height : 120
    },

    imageDIvBorder : {
      width : '50%', 
      height : '100%', 
      borderColor : Colors.myGray, 
      borderWidth : 1, 
      display : 'flex', 
      borderRadius : 20,
      paddingVertical : 40
    },

    
    imageDIvBorder2 : {
      width : '100%', 
      height : '30%', 
      borderColor : Colors.myGray, 
      borderWidth : 1, 
      display : 'flex', 
      justifyContent : 'center',
      borderRadius : 20 ,
      paddingVertical : 40,
      marginTop : 20
    }
})