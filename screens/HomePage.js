import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import HomePageImage from '../components/HomePageImage';


const HomePage = ({navigation}) => {
  return (
    <View>
      <HomePageImage />
      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.navigate('MainScreen')
      }} >
        <Text style={{color: 'white', fontSize: 15}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5C5C',
    padding: 10,
    marginHorizontal: 130,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
