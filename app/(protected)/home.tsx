import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import DashHeader from '../components/DashHeader'
import { Link, useNavigation, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '@/context/AuthContext';
import { BASE_URL } from '@/Enpoints/Endpoint';
import DashHeader from '@/components/DashHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';



const index = () => {
  // const {userToken} = useContext(AuthContext)
  const [show, setShow] = useState(false);

  const navigate = useNavigation<any>()

  const [isLoading, setIsLoading] = useState(true);

  const hideAndShowOne = () =>{
    setShow(false);
  } 

  const hideAndShowTwo = () =>{
    setShow(true);
  }


  const [userToken, setUserToken] = useState(null);
  const getData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setUserToken(JSON.parse(storedToken));
      } 
    } catch (e) {
      console.error('Error retrieving authentication data:', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [shopData, setShopData] = useState<any>([])

  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL}shops`, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      const myData = await res.json();
      setIsLoading(false);
      setShopData(myData.data);
      
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userToken]);


  

  const handleProductPress = (shopId : any) => {
    navigate.navigate('authRoute/resturant_page', {shopId})
  };


  return (
    
    <SafeAreaView style={styles.container}>
        <DashHeader />
        <StatusBar style='dark'/>



        <View style={{position : 'relative', paddingTop : 10, paddingBottom : 2}}>
          <Ionicons name='search' size={15} style={{position : 'absolute', top : 25, left : 15}}/>
          <TextInput placeholder='Search for your favourite food' style={styles.inputStyles}/>
          <Ionicons name='filter' size={15} style={{position : 'absolute', top : 25, right :15}}/>
        </View>


        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
              <View style={{paddingVertical : 0, paddingBottom : 0, }}>
                <Image source={require('../../assets/images/dashSec2.png')}
                  style={styles.imageDIv}
                  resizeMode='contain'
                />
              </View>

              
            <View style={{display : 'flex', flexDirection : 'row', gap : 10, paddingTop : 0, paddingHorizontal : 10}}>
              <TouchableOpacity style={show ? styles.btnStyle1 : styles.btnStyle} onPress={hideAndShowOne}>
                <Ionicons name='fast-food' color={show ? Colors.btnGreen  : 'white' } size={15}/>
                <Text style={show ? styles.btnText1 : styles.btnText}>Restaurant</Text>
              </TouchableOpacity>

              <TouchableOpacity style={show ? styles.btnStyle : styles.btnStyle1} onPress={hideAndShowTwo}>
                <Ionicons name='restaurant' size={15} color={!show ? Colors.btnGreen  : 'white' }/>
                <Text style={show ? styles.btnText : styles.btnText1}>Private Chef</Text>
              </TouchableOpacity>
            
            </View>
          </View>



          { show ? 
            <View style={{paddingTop : 20, }} >
              <Text style={{fontFamily : 'Railway2', fontSize : 17, paddingBottom : 20}}>Recommend Chef</Text>
              <TouchableOpacity>
                <View style={{display : 'flex', 
                  flexDirection : 'row', gap : 10, 
                  justifyContent : 'center', 
                  alignItems : 'center', 
                  borderBottomColor : Colors.myGray,
                  borderBottomWidth : 1,
                  paddingBottom : 15,
                  marginBottom : 15,
                }}>

                  <Image source={require('../../assets/images/prof1.png')}
                    style={{width : 70, height : 70}}
                  />

                  <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                      <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                      <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                      fontSize : 12, color : 'gray', paddingVertical : 5,
                      textAlign : 'justify'
                    }}>
                      Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                      Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
                  </View>

                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{display : 'flex', 
                  flexDirection : 'row', gap : 10, 
                  justifyContent : 'center', 
                  alignItems : 'center', 
                  borderBottomColor : Colors.myGray,
                  borderBottomWidth : 1,
                  paddingBottom : 15,
                  marginBottom : 15,
                }}>

                  <Image source={require('../../assets/images/prof2.png')}
                    style={{width : 70, height : 70}}
                  />

                  <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                      <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                      <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                      fontSize : 12, color : 'gray', paddingVertical : 5,textAlign : 'justify'
                    }}>
                      Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                      Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
                  </View>

                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{display : 'flex', 
                  flexDirection : 'row', gap : 10, 
                  justifyContent : 'center', 
                  alignItems : 'center', 
                  borderBottomColor : Colors.myGray,
                  borderBottomWidth : 1,
                  paddingBottom : 15,
                  marginBottom : 15,
                }}>

                  <Image source={require('../../assets/images/prof3.png')}
                    style={{width : 70, height : 70}}
                  />

                  <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                      <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                      <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                      fontSize : 12, color : 'gray', paddingVertical : 5, textAlign : 'justify'
                    }}>
                      Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                      Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
                  </View>

                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{display : 'flex', 
                  flexDirection : 'row', gap : 10, 
                  justifyContent : 'center', 
                  alignItems : 'center', 
                  borderBottomColor : Colors.myGray,
                  borderBottomWidth : 1,
                  paddingBottom : 15,
                  marginBottom : 15,
                }}>

                  <Image source={require('../../assets/images/prof2.png')}
                    style={{width : 70, height : 70}}
                  />

                  <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                      <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                      <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                      fontSize : 12, color : 'gray', paddingVertical : 5, textAlign : 'justify'
                    }}>
                      Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                      Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
                  </View>

                </View>
              </TouchableOpacity>
              
            </View> :
                        
            <View style={{paddingTop : 20, }}>
              <Text style={{fontFamily : 'Railway3', fontSize : 15, paddingBottom : 10}}>Available Restaurants</Text>
              <View>

 

                  {isLoading || !shopData ? 
                  
                  (<ActivityIndicator style={{paddingTop : 100}} size={'large'}/> )

                  : (

                    <>
                      {shopData.map((item : any, index:any) => (
                        
                        <TouchableOpacity style={styles.restImageDiv} key={index} onPress={() => handleProductPress(item._id)}>
                          
                        <Image source={require('../../assets/images/rest1.png')}
                          resizeMode='cover'
                          style={styles.restImage}
                        />
  
                        <View style={{paddingHorizontal : 10, paddingVertical : 10}}>
                          <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', }}>
                            <Text style={{fontFamily : 'Railway3'}}>{item.shopName}</Text>
                            <Text style={{marginLeft : 'auto', fontFamily : 'Railway2'}}>5.0 (123)</Text>
                          </View>
  
                          <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', paddingTop : 10}}>
                              <Text style={{fontFamily : 'Railway1'}}>From N1000 | 5 - 10 mins</Text>
                              <TouchableOpacity style={{marginLeft : 'auto',}}>
                                <FontAwesome name='heart-o' color={Colors.btnGreen}  size={15}/>
                              </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                    </>
                  )}


              </View>
            </View>

          }
      </ScrollView>




    </SafeAreaView>

  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
        paddingHorizontal: 20,
        paddingTop : 0,
        // marginTop : 50
    },

    imageDIv : {
      width : '100%',
      height : 120,
    },

    inputStyles : {
      padding : 10,
      borderColor : Colors.myGray,
      borderWidth : 1,
      borderRadius : 5,
      fontSize : 15,
      position : 'relative',
      paddingLeft : 40
  },

  btnStyle :{
    backgroundColor : Colors.btnGreen,
    display : 'flex',
    flexDirection : 'row',
    width : '50%',
    alignItems : 'center',
    padding : 10,
    alignSelf : 'center',
    justifyContent : 'center',
    borderRadius : 50,
    gap : 5
  },

  btnText : {
    fontFamily : 'Railway2', color : 'white', fontSize : 13
  },


  btnText1 : {
    fontFamily : 'Railway2', color : Colors.btnGreen, fontSize : 13
  },


  btnStyle1 :{
    backgroundColor : 'white',
    display : 'flex',
    flexDirection : 'row',
    width : '50%',
    alignItems : 'center',
    borderColor : Colors.btnGreen,
    borderWidth : 1,
    padding : 10,
    textAlign : 'center',
    justifyContent : 'center',
    borderRadius : 50,
    gap : 5
  },

  restImageDiv :{
    borderColor : Colors.myLightGray,
    borderWidth : 1,
    borderRadius : 5,
    marginBottom : 20
  },


  restImage : {
    width : '100%',
    height : 100,
    borderTopRightRadius : 5,
    borderTopLeftRadius : 5,
  }

})