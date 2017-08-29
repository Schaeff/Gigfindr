import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CityScreen from '../screens/CityScreen';
import GigScreen from '../screens/GigScreen';

const Router = StackNavigator({
  Home: { screen: HomeScreen },
  City: { screen: CityScreen },
  Gig: { screen: GigScreen }
}, {
  initialRouteName: 'Home'
});

export default Router;