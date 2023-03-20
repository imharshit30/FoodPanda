import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        'https://images.all-free-download.com/images/graphicwebp/food_delivery_banner_design_with_van_carrying_food_6825487.webp',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#FF5C5C'}}>
      <View
        style={{
          borderBottomRightRadius: 40,
          height: 600,
          backgroundColor: '#fff',
          borderBottomLeftRadius: 40,
        }}>
        <FlatList
          // keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.FlatContainer}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 400, width: 350}}
                />
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                borderColor: 'gray',
              }}></View>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 45,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'orange',
            paddingHorizontal: 50,
            paddingVertical: 10,
          }}>
          <Text style={{color: '#fff'}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            paddingHorizontal: 50,
            borderColor: 'orange',
            paddingVertical: 10,
          }}>
          <Text style={{color: '#fff'}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  FlatContainer: {
    alignItems: 'center',
    padding: 20,
  },
});
