import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import React,{useEffect, useState} from 'react'
import Colors from '@/constants/Colors';
import BackHeader from '@/components/BackHeader';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
const orderPage = () => {

  

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



    const router = useRouter()

    const route = useRoute();
    const { cuisines, singleShopData } : any = route.params;


    console.log('This is Single shop Data ............',singleShopData)

    const addToCart = async () => {
        try {
          const existingCart = await AsyncStorage.getItem('cuisines');
          let updatedCart = [];
    
          if (existingCart !== null) {
            updatedCart = JSON.parse(existingCart);
          }
    
          updatedCart.push({ cuisines });
    


          const existingCart2 = await AsyncStorage.getItem('singleShopData');
          let updatedData = []


          if (existingCart2 !== null) {
            updatedData = JSON.parse(existingCart2);
          }
          updatedData.push({singleShopData})


          await AsyncStorage.setItem('cuisines', JSON.stringify(updatedCart));
          await AsyncStorage.setItem('singleShopData', JSON.stringify(updatedData));

          router.replace('/(protected)/carts')

    
          alert('Item added to cart!');

          console.log(existingCart);
          console.log(existingCart?.length)
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
    };




  return (
    <View style={styles.container}>
        <StatusBar style='dark'/>
        <BackHeader />
        <View>

            <Text style={{fontFamily : 'Railway2', fontSize : 20, paddingBottom : 10}}>{cuisines.name}</Text>
            <Image source={require('../../assets/images/combo1.png')}
                resizeMode='cover' style={{width:'100%', height:100, borderRadius : 5,}}
            />
            <Text style={{fontFamily : 'Railway3', paddingTop : 10, color : 'gray', fontSize : 13, lineHeight: 20}}>
                {cuisines.description}
            </Text>
        </View>


        <View>
            <View>
                <View style={styles.headStyle}>
                    <Text style={{fontFamily : 'Railway3', fontSize : 13}}>Chicken Style</Text>
                    <Ionicons name='chevron-down'style={{marginLeft : 'auto', fontSize : 15}}/>
                </View>


                <View>


                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Spicy Fried</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate1}>
                            <View style={current1 ? styles.radioOuter : styles.radioNone}>
                                <View style={current1 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Crunchy</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate2}>
                            <View style={current2 ? styles.radioOuter : styles.radioNone}>
                                <View style={current2 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

            <View>
                <View style={styles.headStyle}>
                    <Text style={{fontFamily : 'Railway3', fontSize : 13}}>Rice Style</Text>
                    <Ionicons name='chevron-down'style={{marginLeft : 'auto', fontSize : 15}}/>
                </View>


                <View>


                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Jollof Rice</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate3}>
                            <View style={current3 ? styles.radioOuter : styles.radioNone}>
                                <View style={current3 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Fried Rice</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate4}>
                            <View style={current4 ? styles.radioOuter : styles.radioNone}>
                                <View style={current4 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>


            <View>
                <View style={styles.headStyle}>
                    <Text style={{fontFamily : 'Railway3', fontSize : 13}}>Drinks</Text>
                    <Ionicons name='chevron-down'style={{marginLeft : 'auto', fontSize : 15}}/>
                </View>


                <View>


                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Coke</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate5}>
                            <View style={current5 ? styles.radioOuter : styles.radioNone}>
                                <View style={current5 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Fanta</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate6}>
                            <View style={current6 ? styles.radioOuter : styles.radioNone}>
                                <View style={current6 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </View>

        <View>
            <View style={{display : 'flex', flexDirection : 'row', paddingTop : 30, alignItems : 'center'}}>

                <Text style={{fontFamily : 'Railway3', fontSize : 13,}}>Quantity</Text>

                <View 
                    style={{display : 'flex', 
                        backgroundColor : Colors.myLightGray , 
                        flexDirection : 'row', alignItems : 'center', 
                        marginLeft : 'auto', gap : 20,
                        borderRadius : 5, paddingHorizontal : 5,
                        paddingVertical : 3
                    }}>

                    <TouchableOpacity>
                        <AntDesign name='minus' size={15}/>
                    </TouchableOpacity>

                    <Text style={{fontSize : 20, padding : 0}}>0</Text>

                    <TouchableOpacity>
                        <AntDesign name='plus' size={15}/>
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity style={styles.btnStyles} onPress={addToCart}>
                <Text style={{color : 'white', fontSize : 13, fontWeight : 'bold'}}>Add N{cuisines.price}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default orderPage

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        paddingHorizontal : 20
    },

    radioNone : {
        borderColor : Colors.myGray, 
        borderWidth : 1.5, 
        padding : 5, 
        width : 15, 
        height : 15, 
        borderRadius : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },

    radioOuter : {
        borderColor : Colors.myRed, 
        borderWidth : 1.5, 
        padding : 5, 
        width : 15, 
        height : 15, 
        borderRadius : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    radioInner : {
        backgroundColor : Colors.myRed, 
         padding : 4, 
        width : 5, 
        height : 5, 
        borderRadius : 50,
    },

    selectDiv :{
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        marginTop : 10
    },

    headStyle : {
        display : 'flex',
        flexDirection : 'row',
        backgroundColor : Colors.myLightGray,
        padding : 6,
        marginTop : 20,
        marginBottom : 6,
        borderRadius : 2
    },
    btnStyles :{
        height : 40,
        backgroundColor : Colors.myRed,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        justifyContent : 'center',
        borderRadius : 5,  
        marginTop : 50,
    },
})