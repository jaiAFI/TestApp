import {AppRegistry} from 'react-native';
import App from './App';
import appConfig from './app.json';

const {name: appName} = appConfig;

AppRegistry.registerComponent(appName, () => App);

if (window.document) {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
