import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import CreateSplitScreen from './screens/CreateSplit';
import MySplits from './screens/MySplits';
Amplify.configure(awsconfig);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Create Split" component={CreateSplitScreen} />
        <Stack.Screen name="My Splits" component={MySplits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
