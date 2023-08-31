import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../src/graphql/mutations'; // Adjust the path as needed
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
  
    // Clear the confirmPasswordError if passwords match
    setConfirmPasswordError('');

    try {
      // Sign up the user using Amazon Cognito
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          profile: username,
          name: name,
        },
      });
      
      // Save user data to DynamoDB
      const createUserInput = {
        id: user.userSub, // Use the Cognito userSub as the unique identifier
        email: email,
        name: name,
        username: username,
      };
  
      await API.graphql(graphqlOperation(createUser, { input: createUserInput }));
  
      navigation.navigate("Home");
      // Handle navigation or other actions after successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error signing up', error.message);
    }
  }; 

  return (
    <View className="flex-1 p-4">
      <View className="items-center mb-4">
        <View className="mb-3 pb-1 border-b border-gray-400 w-3/4">
          <TextInput
            className="input w-full"
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View className="mb-3 pb-1 border-b border-gray-400 w-3/4">
          <TextInput
            className="input w-full"
            autoCapitalize="none"
            placeholder="Name"
            onChangeText={text => setName(text)}
          />
        </View>

        <View className="mb-3 pb-1 border-b border-gray-400 w-3/4">
          <TextInput
            className="input w-full"
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View className="mb-3 pb-1 border-b border-gray-400 w-3/4">
          <TextInput
            className="input w-full"
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View className="mb-3 pb-1 border-b border-gray-400 w-3/4">
          <TextInput
            className="input w-full"
            placeholder="Confirm Password"
            autoCapitalize="none"
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>

        {passwordError && <Text className="error">{passwordError}</Text>}
        {confirmPasswordError && <Text className="error">{confirmPasswordError}</Text>}

        <TouchableOpacity
          className="button bg-blue-500 hover:bg-blue-600 mt-8"
          onPress={handleSignUp}
        >
          <Text className="text-white text-lg font-bold py-2 px-4 rounded">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
