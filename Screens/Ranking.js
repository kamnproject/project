import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Profile from './Profile'


export default class Ranking extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Header
      backgroundColor="#660000"
      placement="left"
  leftComponent={<FontAwesome name="list" color="white" size={30}/>}
  centerComponent={{ text: 'History', style: { color: '#fff',fontSize:25 } }}
  rightComponent={<Ionicons name="ios-notifications" color="white" size={30} onPress={() => this.props.navigation.navigate('Profile')}/>}
/>
        <Text style={{fontWeight: "bold", marginLeft: 5, marginTop: 5}}>Ranking</Text>
        
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
