import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const HomePageImage = () => {
  const getWidth = Dimensions.get("screen").width;
  return (
    <View>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
          }}
          style={{
            height: 450,
            width: getWidth,
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 0,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>The Fastest In</Text>
          <Text style={styles.textHeading}>
            Delivery <Text style={{color: '#FF5C5C'}}>Food</Text>
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.text}>Our job is to filling your tummy with</Text>
          <Text style={styles.text}>delicious food and fast delivery</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePageImage;
const styles = StyleSheet.create({
  textHeading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  textContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
  },
});
