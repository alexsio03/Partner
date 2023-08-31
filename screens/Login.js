import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from the correct library

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Add state for visibility

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Please fill in all fields');
        return;
      }

      await Auth.signIn(email, password);

      Alert.alert('Login successful');
      navigation.navigate('Home'); 
    } catch (error) {
      console.error('Error signing in:', error);
      Alert.alert('Error signing in', error.message);
    }
  };

  return (
    <View className="flex-1 p-4">
      <View className="items-center mb-4">
        <TextInput
          className="border-2 rounded-lg w-64 p-2 mt-4"
          placeholder="Email"
          value={email}
          autoCapitalize='none'
          onChangeText={text => setEmail(text)}
        />
        <View className="border-2 rounded-lg w-64 p-2 mt-2 flex-row">
          <TextInput
            className="w-4/5"
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="w-1/5 items-end pr-1"
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        className="bg-blue-500 py-3 px-6 rounded-lg"
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
