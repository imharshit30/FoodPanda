import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Categories from '../components/Categories';

const MainScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.textHeading}>Yummilicious</Text>
      </View>
      <View style={{position: 'absolute', right: 30, top: 10}}>
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
      <View style={{marginTop: 10}}>
        <Image
          source={require('../images/foodDelivery.jpg')}
          style={styles.foodDeliveryImage}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textCategories}>Categories</Text>
        <Categories navigation={navigation} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5,
  },
  header: {
    backgroundColor: '#FF5C5C',
    height: 70,
    justifyContent: 'center',
  },
  foodDeliveryImage: {
    height: 300,
    width: 350,
    alignSelf: 'center',
    borderRadius: 35,
  },
  textHeading: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    marginTop: 8,
    marginLeft: 60,
  },
  textCategories: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    marginBottom:10
  },
});
