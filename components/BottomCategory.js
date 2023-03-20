import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/Actions';
  
const BottomCategory = ({data}) => {
  const dispatch = useDispatch();
  const addItem = item => {
    dispatch(addItemToCart(item));
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.dataContainer}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 100,
                    width: '50%',
                    borderRadius: 20,
                    marginVertical: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <View style={styles.innerContainer}>
                    <Text style={{color: '#000', fontSize: 18}}>
                      {item.name}
                    </Text>
                    <Text style={{fontWeight: 'bold', color: '#000'}}>
                      Rs. {item.price}
                    </Text>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {
                        addItem(item);
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Add Item
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default BottomCategory;

const styles = StyleSheet.create({
  dataContainer: {
    elevation: 3,
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    width: '50%',
    // alignItems: 'center',
    marginVertical: 10,
    marginLeft: 90,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '40%',
    marginRight: 60,
  },
});
