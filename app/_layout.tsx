import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthProvider, useAuth } from '@/context/AuthContext';
import { Slot } from 'expo-router';
import { useSegments } from 'expo-router';

export {
  ErrorBoundary,
} from 'expo-router';




const MainLayout = () => {

  const {isAuthenticated} = useAuth()
  const segments = useSegments()

  const router = useRouter();


  useEffect(()=>{
    if(typeof isAuthenticated == 'undefined') return 

    const inApp = segments[0] == '/(protected)'

    if(isAuthenticated && !inApp ){
      router.replace('/authRoute/home_dash')
      // router.replace('/home')
      // router.replace('/account')
      // router.replace('/authRoute/(profile)/personal')
      // router.replace('/authRoute/(profile)/wallet')
      // router.replace('/authRoute/(profile)/FAQs')
    }else if(isAuthenticated == false ){
      router.replace('/login')
    }
  }, [isAuthenticated])


  return (
    <Slot />
  );
}

export default function RootLayoutNav() {
  SplashScreen.preventAutoHideAsync();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Railway1: require('../assets/fonts/Raleway-Regular.ttf'),
    Railway2: require('../assets/fonts/Raleway-Bold.ttf'),
    Railway3: require('../assets/fonts/Raleway-SemiBold.ttf'),
    ...FontAwesome.font,

  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);
  

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; 
  }

  return (
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
  );
}
