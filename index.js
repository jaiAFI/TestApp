// index.js
import {AppRegistry} from 'react-native';
import App from './src/App'; // Your main app component
import appConfig from './src/app.json';

const {name: appName} = appConfig;

AppRegistry.registerComponent(appName, () => App);

// If running on the web, use the web entry point
if (window.document) {
  require('./src/index.web');
}
