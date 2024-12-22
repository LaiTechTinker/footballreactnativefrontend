import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import{createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import App1 from "./app1";
import { SplashScreen } from 'expo-router';
import Icons from '@expo/vector-icons/Ionicons'
import { View } from 'react-native';

import DashBoard from '../app/pages/Dashboard'
import Settings from '../app/pages/settings'
import LoginPage from '.././app/Login/LoginPage'
import Signup from '../app/Login/SignUp'
import StatsPage from '../app/pages/StatsPage'
import HomePage from '../app/pages/Homepage'
import Gameplan from '../app/pages/GamePlan'
import { useEffect, useState } from 'react';


const Tab=createBottomTabNavigator()
const Drawer=createDrawerNavigator()
function Taber(){
  return(
  <Tab.Navigator screenOptions={

    {
      tabBarLabelPosition:'beside-icon',
      tabBarShowLabel:false,
      headerShown:false,
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor:'black'
    }
   }>
           <Tab.Screen name='Home' component={HomePage} options={{
          
            tabBarShowLabel:false,
            tabBarIcon:({color})=><Icons name="home-outline" size={25} color={color}/>
           }}/>
      <Tab.Screen name='Lineup'  component={Gameplan} options={{
       
            tabBarShowLabel:false,
            tabBarIcon:({color})=><Icons name="football-outline" size={25} color={color}/>}}/>
 
      <Tab.Screen name='Stats' component={StatsPage} options={{
           
            tabBarShowLabel:false,
            tabBarIcon:({color})=><Icons name="stats-chart-outline" size={25} color={color}/>}}/>
     
    </Tab.Navigator>
  ) 
    
}
function Drawerer(){
  return(
<Drawer.Navigator screenOptions={{
    drawerActiveTintColor: 'blue',
    drawerInactiveTintColor: 'gray',
    drawerLabelStyle: { fontSize: 16 },
  }} >
           <Tab.Screen name='Profile' component={DashBoard} />
      <Tab.Screen name='Videos'  component={LoginPage} />

    
    </Drawer.Navigator>
  )
}
export default function RootLayout() {
  const [appIsReady,setAppIsReady]=useState(false);
  useEffect(()=>{
    SplashScreen.preventAutoHideAsync();
    setAppIsReady(true);
  },[]);
  useEffect(()=>{
    if(appIsReady){
      SplashScreen.hideAsync();
    }
  },[appIsReady]);
  return(
  // //  <Drawerer/>
  // <Taber/>
  <LoginPage/>






   
    
    
  //  <Signup/>
//  <LoginPage/>
  );
}
