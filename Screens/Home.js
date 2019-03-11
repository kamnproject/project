import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from './Profile'


export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Header
      backgroundColor="#660000"
      placement="left"
  leftComponent={<Entypo name="circular-graph" color="white" size={30}/>}
  centerComponent={{ text: 'Achievement', style: { color: '#fff',fontSize:25 } }}
  rightComponent={<Ionicons name="ios-notifications" color="white" size={30} onPress={() => this.props.navigation.navigate('Profile')}/>}
/>
        <Text>Home</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
