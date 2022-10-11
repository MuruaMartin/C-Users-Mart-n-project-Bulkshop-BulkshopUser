import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/components/navigation";

import {NavigationContainer} from '@react-navigation/native';
import {Amplify} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import BasketContextProvider from './src/contexts/BasketContext';
import { Basket } from "./src/models";

Amplify.configure({
  ...config, 
  Analytics: {disabled: true}
});

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>

      <StatusBar style="Light" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);