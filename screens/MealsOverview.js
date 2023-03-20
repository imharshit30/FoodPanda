import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {data} from '../DummyData';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../redux/Actions';

const MealsOverview = ({route}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const addItem = item => {
    dispatch(addItemToCart(item));
  };

  function renderMealItem({item}) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.image}}
          style={{height: 200, width: '50%', borderRadius: 20, margin: 10}}
        />
        <View style={styles.innerContainer}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22}}>
            {item.name}
          </Text>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>
            Rs. {item.price}
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                addItem(item);
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const catTitle = route.params.cat;
  const displayMeal = data.filter(mealItem => {
    return mealItem.heading === catTitle;
  });

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MainScreen');
            }}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 20,
            }}>
            <Image
              source={require('../images/back.png')}
              style={{
                height: 20,
                width: 40,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.heading}>{catTitle}</Text>
        </View>
        <View style={{position: 'absolute', right: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddToCart')}
            style={{
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              height: 50,
              width: 80,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../images/cart.png')}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList data={displayMeal} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF5C5C',
    height: 70,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    marginLeft: 20,
  },
  container: {
    elevation: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#FF5C5C',
  },
  innerContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 120,
    marginTop: 20,
  },
});
