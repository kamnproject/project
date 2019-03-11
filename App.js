import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation'

import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
//import { createMaterialTopTabNavigator, BottomTabBar, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './Screens/Home.js'
import ProfileScreen from './Screens/Profile.js'
import MapScreen from './Screens/Map.js'
import SiteMapScreen from './Screens/SiteMap.js'
import LoginScreen from './Screens/LoginScreen'



export default class App extends React.Component {
  state={
    flag:true
  }
  handleChange=()=>{
    this.setState({flag:!!this.state.flag})
    
  }
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/> 
       {/* <AppContainer3/> */}
      </View>
    );
  }
}


const TabPages = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Map : MapScreen,
    SiteMap: SiteMapScreen,
  },
  {
    initialRouterName: 'Login',
    tabBarOptions:{activeTintColor:"#660000",inactiveTintColor:"grey", showLabel:true},
   
    defaultNavigationOptions:({navigation})=>( {
      tabBarIcon:()=>{
        const{routeName}=navigation.state;
        if(routeName=='Home')
          return <Entypo  name="home" size={20} color="#660000"/>
        else if(routeName==="Profile")
          return <MaterialCommunityIcons  name="face-profile" size={20} color="#660000"/>
        else if(routeName==="Map")
        return <Foundation  name="map" size={20} color="#660000"/>
        else if(routeName==="SiteMap")
        return <Foundation  name="info" size={20} color="#660000"/>
      }
      })
  }
)
//const AppContainer2 = createAppContainer(TabPages)


const RootStack = createStackNavigator(
  {
    Main: {
      screen: LoginScreen,
    },
    MyModal: {
      screen: TabPages,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(RootStack);
/*******************************************Drawer************************ */
// const MyDrawerNavigator = createDrawerNavigator({
//   Home:TabPages,
//   Main: HomeScreen,
//   Profile: ProfileScreen,
//   Map : MapScreen,
//   SiteMap: SiteMapScreen,
  

// },
// {
//   initialRouterName: 'Home',
//   drawerWidth:150,
//   drawerBackgroundColor:"white",
//   drawerType:"slide",
//   contentOptions:{
//     activeTintColor: 'black',
//     inactiveTintColor:"black",
    
//     activeBackgroundColor:"lightgrey",
//     itemsContainerStyle: {
//       marginVertical: 0,
//     },
//     iconContainerStyle: {
//       opacity: 1,
//     },
//     //labelstyle for the font in the drawer
//     labelStyle:{
//       //fontSize:20,
//       //color:"red"
//     }
   
//   }
// }, 
// )
// const AppContainer3 = createAppContainer(MyDrawerNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
