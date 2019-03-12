import React from 'react';
import { StyleSheet, Text, View, FormLabel, FormInput, FormValidationMessage } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { createMaterialTopTabNavigator, BottomTabBar, createDrawerNavigator } from 'react-navigation';
import { Header, Input, Button } from 'react-native-elements';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Profile extends React.Component {
state = {

  name: "",
  email: "",
  address: "",
  phone: ""


}


  render() {
    return (
      <View style={styles.container}>
         <Header
      backgroundColor="#660000"
      placement="left"
  leftComponent={<MaterialCommunityIcons  name="face-profile" color="white" size={30}/>}
  centerComponent={{ text: 'Profile', style: { color: '#fff',fontSize:25 } }}
  rightComponent={<Ionicons name="ios-notifications" color="white" size={30} onPress={() => this.props.navigation.navigate('Profile')}/>}
/>
        <Text style={{fontWeight: "bold", marginLeft: 5, fontSize: 20, marginBottom: 15}}>Profile</Text>

<Button
    style={{width: 30}}
    title="select image"

/>


<Text style={{marginTop: 5, marginLeft: 5}}> Name </Text> 
    <Input 
    
        placeholder='Name'
        value={this.state.name}
       style={{borderWidth:1, borderColor:"black", width: 80}}
    />

<Text style={{marginTop: 5, marginLeft: 5}}> Email </Text> 
     <Input 
        placeholder='Email'
        value={this.state.email}
        style={{borderWidth:1, borderColor:"black", width: 80}}
    />

<Text style={{marginTop: 5, marginLeft: 5}}> Address </Text> 
     <Input 
        placeholder='Address'
        value={this.state.address}
        style={{borderWidth:1, borderColor:"black", width: 80}}
    />

<Text style={{marginTop: 5, marginLeft: 5}}> Phone </Text> 
     <Input 
        placeholder='Phone'
        value={this.state.phone}
        style={{borderWidth:1, borderColor:"black", width: 80}}
    />

<Text>  </Text>

<Button
  // onPress={onPressLearnMore}
  title="Update Profile"
 
/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
