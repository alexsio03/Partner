import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const HomeScreen = () => {
  const [user, setUser] = useState(Auth.user);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('Sign Up');
  };

  const handleMySplits = () => {
    navigation.navigate('My Splits'); // Navigate to the MySplits page
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      // Update the user state to null to refresh the screen
      setUser(null);
      // Handle any additional actions you want after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    // Update the user state when the component mounts or when it is focused
    if (isFocused) {
      setUser(Auth.user);
    }
  }, [isFocused, user]);

  return (
    <View className="flex-1 p-4">
      <View className="items-center mb-4">
        <Text className="text-xl font-bold">Gym Performance App</Text>

        <View className="mt-4">
          <Text className="text-lg">Body Weight: 180 lbs</Text>
          <Text className="text-lg">Body Fat: 15%</Text>
          {/* Add more personal metrics here */}
        </View>
      </View>

      {user ? (
        <View>
          <TouchableOpacity
            className="bg-yellow-500 py-3 px-6 rounded-lg mb-6"
            onPress={handleMySplits}
          >
            <Text className="text-white text-lg font-bold">My Splits</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-red-500 py-3 px-6 rounded-lg"
            onPress={handleLogout}
          >
            <Text className="text-white text-lg font-bold">Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity
            className="bg-blue-500 py-3 px-6 rounded-lg"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg font-bold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 py-3 px-6 rounded-lg mt-6"
            onPress={handleSignUp}
          >
            <Text className="text-white text-lg font-bold">Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
