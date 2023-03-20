import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../redux/Actions';

const AddToCart = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemFromCart(index));
  };

  let a = [];
  a = items;

  const sumTotal = items.reduce((acc, next) => {
    return acc + next.price;
  }, 0);
  console.log(sumTotal);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={{color: '#fff', fontSize: 19}}>Cart</Text>
      </View>

      <View style={{elevation: 4, backgroundColor: '#fff', marginVertical: 10}}>
        <FlatList
          data={items}
          renderItem={({item, index}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    margin: 10,
                  }}
                />
                <View style={styles.innerContainer}>
                  <Text
                    style={{color: '#000', fontWeight: 'bold', fontSize: 22}}>
                    {item.name}
                  </Text>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    Rs. {item.price}
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {
                        removeItem(index);
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Remove Item
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            Added Items - {a.length}
          </Text>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            Total :- {sumTotal}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 120,
            height: 50,
            backgroundColor: 'green',
            marginRight: 10,
          }} onPress={()=>{
            Alert.alert('Your order is successfully place!!!')
          }}>
          <View>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Place Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  innerContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 120,
    marginTop: 5,
  },
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5C5C',
  },

  footer: {
    backgroundColor: '#FF5C5C',
    width: Dimensions.get("screen").width,
    height:80,
    position: 'absolute',
    top: 800,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
