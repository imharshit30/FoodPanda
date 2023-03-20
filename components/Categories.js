import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {category, data} from '../DummyData';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../redux/Actions';
import BottomCategory from './BottomCategory';

const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const addItem = item => {
    dispatch(addItemToCart(item));
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MealsOverview', {
              cat: item.title,
            });
          }}>
          <View style={styles.container}>
            <View>
              <Image
                source={{uri: item.image}}
                style={{
                  height: 80,
                  width: 75,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={category}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          ListFooterComponent={<BottomCategory data={data} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    width: Dimensions.get('screen').width - 240,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#FF5C5C',
    flexDirection: 'row',
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

});
