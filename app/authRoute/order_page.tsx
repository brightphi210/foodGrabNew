import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import React,{useEffect, useState} from 'react'
import Colors from '@/constants/Colors';
import BackHeader from '@/components/BackHeader';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
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
    const { cuisines } : any = route.params;

    const addToCart = async () => {
        try {
          const existingCart = await AsyncStorage.getItem('cuisines');
          let updatedCart = [];
    
          if (existingCart !== null) {
            updatedCart = JSON.parse(existingCart);
          }
    
          updatedCart.push({ cuisines });
    
          await AsyncStorage.setItem('cuisines', JSON.stringify(updatedCart));

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
                    <Text style={{fontFamily : 'Railway3'}}>Chicken Style</Text>
                    <Ionicons name='chevron-down'style={{marginLeft : 'auto', fontSize : 15}}/>
                </View>


                <View>


                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1'}}>Spicy Fried</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate1}>
                            <View style={current1 ? styles.radioOuter : styles.radioNone}>
                                <View style={current1 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1'}}>Crunchy</Text>
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
                    <Text style={{fontFamily : 'Railway3'}}>Rice Style</Text>
                    <Ionicons name='chevron-down'style={{marginLeft : 'auto', fontSize : 15}}/>
                </View>


                <View>


                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1'}}>Jollof Rice</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate3}>
                            <View style={current3 ? styles.radioOuter : styles.radioNone}>
                                <View style={current3 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1'}}>Fried Rice</Text>
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
                    <Text style={{fontFamily : 'Railway3'}}>Drinks</Text>
                    <Ionicons name='chevron-down'style={{marginLeft : 'auto', fontSize : 15}}/>
                </View>


                <View>


                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1'}}>Coke</Text>
                        <TouchableOpacity style={{marginLeft : 'auto'}} onPress={activate5}>
                            <View style={current5 ? styles.radioOuter : styles.radioNone}>
                                <View style={current5 ? styles.radioInner : null}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.selectDiv}>
                        <Text style={{fontFamily : 'Railway1'}}>Fanta</Text>
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
            <View style={{display : 'flex', flexDirection : 'row', paddingTop : 20, alignItems : 'center'}}>

                <Text style={{fontFamily : 'Railway3', fontSize : 15,}}>Quantity</Text>

                <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', marginLeft : 'auto', gap : 20}}>

                    <TouchableOpacity>
                        <Ionicons name='remove' size={20}/>
                    </TouchableOpacity>

                    <Text style={{fontFamily : 'Railway3', fontSize : 25,}}>0</Text>

                    <TouchableOpacity>
                        <Ionicons name='add' size={20}/>
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity style={styles.btnStyles} onPress={addToCart}>
                <Text style={{color : 'white', fontSize : 15, fontFamily : 'Railway3'}}>Add N{cuisines.price}</Text>
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
        width : 20, 
        height : 20, 
        borderRadius : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },

    radioOuter : {
        borderColor : Colors.myRed, 
        borderWidth : 1.5, 
        padding : 5, 
        width : 20, 
        height : 20, 
        borderRadius : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    radioInner : {
        backgroundColor : Colors.myRed, 
         padding : 6, 
        width : 5, height : 5, 
        borderRadius : 50,
    },

    selectDiv :{
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        marginTop : 15
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
        marginTop : 20,
    },
})