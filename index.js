/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { name as appName } from './app.json';
import App from './src';

AntDesign.loadFont().catch(e => console.log(e));
Feather.loadFont().catch(e => console.log(e));
Entypo.loadFont().catch(e => console.log(e));
Ionicons.loadFont().catch(e => console.log(e));

AppRegistry.registerComponent(appName, () => App);
