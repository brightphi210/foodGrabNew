import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router'
import { useNavigation } from 'expo-router';
import BackHeader from '@/components/BackHeader';

const prefered_payment = () => {

    const navigate = useRouter()
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
        <BackHeader />
      <Text style={{fontFamily : 'Railway3', fontSize : 18}}>Choose your preferred payment</Text>

      
      <View >
        <View style={{paddingTop : 20}}>
            <View style={styles.selectDiv}>

                <View style={{display : 'flex', flexDirection :'row', gap : 5, alignItems : 'center'}}>
                    <Ionicons name='wallet-outline' size={17} color={Colors.myLightGreen}/>
                    <Text style={{fontFamily : 'Railway3', color : Colors.myGreen, fontSize : 15}}>Bank Card</Text>
                </View>

                <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate1}>
                    <View style={current1 ? styles.radioOuter : styles.radioNone}>
                        <View style={current1 ? styles.radioInner : null}></View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

        <View style={{paddingTop : 20}}>
            <View style={styles.selectDiv}>

                <View style={{display : 'flex', flexDirection :'row', gap : 5, alignItems : 'center'}}>
                    <Ionicons name='card' size={17} color={Colors.myLightGreen}/>
                    <Text style={{fontFamily : 'Railway3', color : Colors.myGreen, fontSize : 15}}>Bank Transfer</Text>
                </View>

                <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate2}>
                    <View style={current2 ? styles.radioOuter : styles.radioNone}>
                        <View style={current2 ? styles.radioInner : null}></View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
          
        </View>


        <View style={styles.bottomBtns} >
            <TouchableOpacity style={styles.eachBottomBtn} onPress={()=>{navigate.navigate('authRoute/order_status')}}>
                <Text style={{fontFamily : 'Railway2', fontSize : 15, color : 'white'}}>Make Payment</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default prefered_payment

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        paddingHorizontal : 20,
        position : 'relative',
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
        borderWidth : 1,
        borderColor : Colors.myGray,
        paddingHorizontal : 10,
        paddingVertical : 15,
        borderRadius : 5
    },

    
    bottomBtns: {
        width : '100%',
        display : 'flex',
        margin : 'auto',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        paddingTop : 10,
        position : 'absolute',
        bottom : 50
    },
    
    
    eachBottomBtn : {
        width : '100%',
        left : 0,
        right : 0,
        padding : 10,
        alignItems : 'center',
        backgroundColor : Colors.myRed, 
        marginTop : 10,
        borderRadius : 5,
    },
})