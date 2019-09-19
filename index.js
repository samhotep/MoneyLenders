/**
 * @format
 */

import './global.js';
import {AppRegistry} from 'react-native';
import HomePage from './pages/HomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomePage);
