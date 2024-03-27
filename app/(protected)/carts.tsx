import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

const cart = () => {

      const [cartItems, setCartItems] = useState([])
      const [cartSingleItems, setCartSingleItems] = useState<any>([])

      const router = useRouter();

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


    const getData2 = async () => {
      try {
        const jsonValue2 = await AsyncStorage.getItem('singleShopData');
        return setCartSingleItems(jsonValue2 != null ? JSON.parse(jsonValue2) : null);
      } catch (e) {
        console.log(e)
      }
  };

  useEffect(() => {
      getData2();
  },[]);



  // console.log(cartSingleItems)


    const deleteAll = () => {
      AsyncStorage.removeItem('cuisines');
      AsyncStorage.removeItem('singleShopData');
      router.replace('/home')
    };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>

      <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
        <Text style={{paddingLeft : 20, fontFamily : 'Railway2', paddingTop : 30, fontSize : 15}}>My Cart</Text>

        {cartItems === null ? (
          <View style={{
            backgroundColor : Colors.myLightGray, 
            marginLeft : 'auto', marginTop : 30, 
            marginRight : 20, display : 'flex', flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            paddingHorizontal : 8,
            paddingVertical : 5,
            borderRadius : 100,
            paddingTop : 0

          }}>
            <Text style={{ fontFamily : 'Railway1',  fontSize : 15, }}>0</Text>
          </View>
          
        ) : (
          <View style={{
            backgroundColor : Colors.myLightGray, 
            marginLeft : 'auto', marginTop : 30, 
            marginRight : 20, display : 'flex', flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            paddingHorizontal : 8,
            paddingVertical : 5,
            borderRadius : 100,
            paddingTop : 0

          }}>
            <Text style={{ fontFamily : 'Railway1',  fontSize : 15, }}>{cartItems.length}</Text>
          </View>
        )}
      </View>

      {cartItems === null ? (

        <View style={styles.container2}>

        <View >
          <Image 
            source={require('../../assets/images/Box.png')}
          />
        </View>
          <Text style={{paddingVertical : 20, fontFamily : 'Railway1'}}>Your Cart is empty</Text>

        <TouchableOpacity style={styles.btnStyles} onPress={()=>{router.replace('/(protected)/home')}}>
          <Text style={{color : 'white'}}>Add Items to cart</Text>
        </TouchableOpacity>
        </View>

      ) : (

        <ScrollView style={styles.container3} showsVerticalScrollIndicator={false}>

          <View style={{display : 'flex', flexDirection : 'row', paddingBottom : 10}}>
          <TouchableOpacity onPress={deleteAll} 
                style={{backgroundColor : Colors.myLightGray, 
                  padding : 5, paddingHorizontal : 20, 
                  borderRadius : 5, 
                  
                }}>
                <Text style={{fontFamily : 'Railway3', fontSize : 12}}>Clear Cart</Text>
          </TouchableOpacity>
          </View>

          {cartItems.map((cartItem : any, index : any) =>(
            <View style={styles.eachCartDiv} key={index}>
              <View style={styles.eachCart}>
                <View style={{overflow : 'hidden', width : 70, height : 60, borderRadius : 5}}>
                  <Image 
                    source={require('../../assets/images/imgFood2.png')}
                    style={{width : 70, height : 70, }}
                  />
                </View>

                <View style={styles.cartRight}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 50}}>
                    <Text style={{fontFamily : 'Railway2', fontSize : 15}}>{cartItem.cuisines.name}</Text> 
                    <Text style={{ marginLeft : 'auto', fontSize : 12, color : 'gray', paddingLeft : 60}}>3 Items</Text>
                  </View>
                  <Text style={{ fontFamily: 'Railway1', fontSize: 12, paddingVertical: 6, color: Colors.myGreen }}>Chiken Republic</Text>
                </View>
                
              </View>

              <View style={styles.checkOutDiv}>
              

                  <Link href={"/authRoute/order_summary"} asChild>
                      <TouchableOpacity style={styles.checkOutBtn}>
                      <Text style={{fontFamily : 'Railway2', color : 'white', fontSize : 12}}>Checkout</Text>
                      </TouchableOpacity>
                  </Link>

                <Link href={"/authRoute/proceed_checkout"} asChild>
                  <Text style={{fontFamily : 'Railway2', fontSize : 12}}>View Selection</Text>
                </Link>
                <FontAwesome name='trash' size={15} color={Colors.myRed} style={{marginLeft : 'auto'}}/>
              </View>
            </View>
          ))}

      </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white'
  },


  container2 : {
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    paddingHorizontal : 20
  },



  btnStyles :{
    height : 40,
    backgroundColor : Colors.myRed,
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 20,
    justifyContent : 'center',
    borderRadius : 5,  
    marginTop : 10,
    width : '80%',
},

container3 : {
  flex : 1,
  paddingHorizontal : 20,
  paddingTop : 20,
},

eachCartDiv : {
  borderColor : Colors.myGray,
  borderWidth : 1,
  padding : 10,
  borderRadius : 5,
  marginBottom : 20
},

eachCart : {
  display : 'flex',
  flexDirection : 'row',
  gap : 10,
  alignItems : 'center',
  marginBottom : 5

},

cartRight : {},

checkOutDiv : {
  display : 'flex',
  flexDirection : 'row',
  alignItems : 'center',
  gap : 20 
  // justifyContent : 'space-between'
},

checkOutBtn : {
  height : 25,
  backgroundColor : Colors.myRed,
  flexDirection : 'row',
  alignItems : 'center',
  paddingHorizontal : 20,
  justifyContent : 'center',
  borderRadius : 3,  
  marginTop : 5,
  width : '30%',
}



  
})