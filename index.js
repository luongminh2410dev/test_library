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
import App from './demo';
import { name as appName } from './app.json';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

AntDesign.loadFont();
Feather.loadFont();

AppRegistry.registerComponent(appName, () => App);
