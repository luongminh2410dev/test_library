// import ListQuestion from './src/list_question';
// import SingleQuestion from './src/single_question';

// export {
//     ListQuestion,
//     SingleQuestion
// };


// DEMO
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { name as appName } from './app.json';
import App from './demo';

AntDesign.loadFont();
Feather.loadFont();
Entypo.loadFont();
Ionicons.loadFont()

AppRegistry.registerComponent(appName, () => App);
