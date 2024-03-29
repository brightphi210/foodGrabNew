import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router'
import { useNavigation } from 'expo-router';
import BackHeader from '@/components/BackHeader';
import { StatusBar } from 'expo-status-bar';
const order_summary = () => {

  const navigate = useNavigation()
  const router = useRouter()
  const [current1, setCurrent1] = useState(true);
  const [current2, setCurrent2] = useState(false);

  const [current3, setCurrent3] = useState(true);
  const [current4, setCurrent4] = useState(false);


  const [current5, setCurrent5] = useState(true);
  const [current6, setCurrent6] = useState(false);

  const activate1 = () =>{
      setCurrent1(true);
      setCurrent2(false);
  }

  const activate2 = () =>{
      setCurrent1(false);
      setCurrent2(true);
  }


  const activate3 = () =>{
      setCurrent3(true);
      setCurrent4(false);
  }

  const activate4 = () =>{
      setCurrent3(false);
      setCurrent4(true);
  }


  const activate5 = () =>{
      setCurrent5(true);
      setCurrent6(false);
  }

  const activate6 = () =>{
      setCurrent5(false);
      setCurrent6(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <BackHeader />
      <Text style={{fontFamily : 'Railway2', fontSize : 15}}>Checkout</Text>

      <View>
        <View style={styles.grayBG}>
          <Text style={{fontFamily : 'Railway3', fontSize : 13}}>Order Summary</Text>
        </View>
        <View style={{display : 'flex', flexDirection : 'row', borderBottomWidth : 1, borderBottomColor : Colors.myGray, paddingVertical : 20}}>
          <View style={{display : 'flex', flexDirection : 'row', gap : 10}}>
            <View style={{width : 65, height : 50, overflow : 'hidden', borderRadius : 5}}>
              <Image source={require('../../assets/images/imgFood2.png')} style={{width  : 70, height : 70}}/>
            </View>

            <View>
              <Text style={{fontFamily : 'Railway2', fontSize : 18}}>Belle Combo</Text>
              <Text style={{fontFamily : 'Railway3', color : Colors.myLightGreen, fontSize : 11, paddingTop : 6}}>Kilimajaro - Big Tree</Text>
            </View>
          </View>

          <Text style={{marginLeft : 'auto', color : 'gray', fontFamily : 'Railway1', fontSize : 12}}>View Selection</Text>
        </View>

        <View style={{paddingTop : 10}}>
          <Text style={{fontFamily : 'Railway1', fontSize : 11, color : 'grey', paddingBottom : 5}}>Delivery Address</Text>
          <View style={{borderColor : Colors.myGray, borderWidth : 1, padding : 10, borderRadius : 5}}>
            <TextInput placeholder='Enter Address'/>
          </View>
        </View>

        <View style={styles.grayBG}>
          <Text style={{fontFamily : 'Railway3', fontSize : 13}}>Payment Summary</Text>
        </View>

        <View style={{paddingTop : 10}}>
          <View style={styles.paymentDiv}>
            <Text style={{fontFamily : 'Railway1', fontSize : 13, color : 'gray'}}>Sub-Total  (3 Items)</Text>
            <Text style={{marginLeft : 'auto', fontWeight : '500', fontSize : 13}}>N3,700.00</Text>
          </View>

          <View style={styles.paymentDiv}>
            <Text style={{fontFamily : 'Railway1', fontSize : 13, color : 'gray'}}>Delivery Fee</Text>
            <Text style={{marginLeft : 'auto', fontWeight : '500', fontSize : 13}}>N3,700.00</Text>
          </View>

          <View style={styles.paymentDiv}> 
            <Text style={{fontFamily : 'Railway1', fontSize : 13, color : 'gray'}}>Booking Fee</Text>
            <Text style={{marginLeft : 'auto', fontWeight : '500', fontSize : 13}}>N3,700.00</Text>
          </View>

          <View style={styles.paymentDiv}>
            <Text style={{fontFamily : 'Railway3', color : Colors.myRed}}>Total</Text>
            <Text style={{marginLeft : 'auto', fontWeight : '500', fontSize : 13, color : Colors.myRed}}>N3,700.00</Text>
          </View>
        </View>


        <View style={styles.bottomBtns} >

          <TouchableOpacity style={styles.eachBottomBtn} onPress={()=>router.push('/authRoute/prefered_payment')}>
              <Text style={{fontFamily : 'Railway2', fontSize : 13, color : 'white'}}>Place Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.eachBottomBtn2} onPress={navigate.goBack}>
              <Text style={{fontFamily : 'Railway2', fontSize : 13, color : Colors.myRed}}>Cancel Order</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  )
}

export default order_summary

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    paddingHorizontal : 20
  },

  grayBG : {
    padding : 5,
    paddingHorizontal :10,
    backgroundColor : Colors.myLightGray,
    borderRadius : 2,
    marginTop : 20
  },

  paymentDiv : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    paddingVertical : 7
  },

  
  radioNone : {
    borderColor : Colors.myGray, 
    borderWidth : 1.5, 
    padding : 5, 
    width : 16, 
    height : 16, 
    borderRadius : 50,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
},

radioOuter : {
    borderColor : 'gray', 
    borderWidth : 1.5, 
    padding : 3, 
    width : 16, 
    height : 16, 
    borderRadius : 50,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
},

radioInner : {
    backgroundColor : 'gray', 
     padding : 5, 
      width : 3, 
      height : 3, 
    borderRadius : 50,
},

  selectDiv :{
      display : 'flex',
      flexDirection : 'row',
      alignItems :'center',
  },

  headStyle : {
      display : 'flex',
      flexDirection : 'row',
      backgroundColor : Colors.myLightGray,
      padding : 5,
      marginTop : 20,
      borderRadius : 5
  },
  btnStyles :{
      height : 50,
      backgroundColor : Colors.myRed,
      flexDirection : 'row',
      alignItems : 'center',
      paddingHorizontal : 20,
      justifyContent : 'center',
      borderRadius : 10,  
      marginTop : 30,
  },

  btnDivs :{
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    gap : 20,
    paddingTop : 20,
},

eachBtn : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    gap : 5,
    borderWidth : 1,
    borderColor : Colors.myGray,
    padding : 13,
    // paddingHorizontal : 20,
    borderRadius : 10,
    borderStyle : 'dashed'
},

bottomBtns: {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    alignSelf : 'center',
    margin : 'auto',
    paddingTop : 10, 
    gap : 10,
    paddingHorizontal : 10
},


eachBottomBtn : {
    width : '50%',
    padding : 10,
    alignItems : 'center',
    backgroundColor : Colors.myRed, 
    marginTop : 10,
    borderRadius : 5,
},

eachBottomBtn2 : {
    width : '50%',
    padding : 10,
    alignItems : 'center',
    borderColor : Colors.myRed, 
    borderWidth : 1,
    marginTop : 10,
    borderRadius : 5,
}
})