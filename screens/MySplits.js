import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MySplits = () => {
  const navigation = useNavigation();

  const handleCreateSplit = () => {
    navigation.navigate('Create Split'); // Navigate to the CreateSplitScreen
  };

  // TODO: Fetch user's splits from your data source and display them here

  return (
    <View className="flex-1 p-4">
      <View className="items-center mb-4">
        <Text className="text-xl font-bold">My Splits</Text>
        {/* Display user's splits here */}
      </View>

      <TouchableOpacity
        className="bg-green-500 py-3 px-6 rounded-lg mt-6"
        onPress={handleCreateSplit}
      >
        <Text className="text-white text-lg font-bold">Create Split</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MySplits;
