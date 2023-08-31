import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { createSplit, createExercise } from '../src/aws-exports'; // Adjust the paths as needed
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons } from '@expo/vector-icons'; 

const CreateSplitScreen = () => {
  const [splitName, setSplitName] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [repsPerSet, setRepsPerSet] = useState('');
  const [weightUsed, setWeightUsed] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('Chest');

  const muscleGroups = ['Chest', 'Arms', 'Legs', 'Shoulders', 'Back'];

  const [exercises, setExercises] = useState([]); // To store the added exercises

  const handleAddExercise = () => {
    if (!exerciseName || !muscleGroup || !sets ) {
      Alert.alert('All exercise fields are required');
      return;
    }

    const newExercise = {
      name: exerciseName,
      muscleGroup,
      sets: parseInt(sets),
      repsPerSet: repsPerSet,
      weightUsed: parseFloat(weightUsed),
    };

    setExercises([...exercises, newExercise]);

    // Clear the exercise input fields
    setExerciseName('');
    setMuscleGroup('');
    setSets('');
    setRepsPerSet('');
    setWeightUsed('');
  };

  const handleCreateSplit = async () => {
    if (!splitName || exercises.length === 0) {
      Alert.alert('Split name and at least one exercise are required');
      return;
    }

    try {
      const createSplitInput = {
        name: splitName,
        exercises: exercises
      };

      const result = await API.graphql(graphqlOperation(createSplit, { input: createSplitInput }));
      console.log(result)
      const splitId = result.data.createSplit.id;

      // Create exercises for the split
      for (const exercise of exercises) {
          console.log(exercise)
        const createExerciseInput = {
          name: exercise.name,
          muscleGroup: exercise.muscleGroup,
          sets: exercise.sets,
          repsPerSet: exercise.repsPerSet,
          weightUsed: exercise.weightUsed,
          splitID: splitId,
        };

        await API.graphql(graphqlOperation(createExercise, { input: createExerciseInput }));
      }

      Alert.alert('Split and exercises created successfully');
      // Handle navigation or other actions after successful split and exercise creation
    } catch (error) {
      console.error('Error creating split and exercises:', error);
      Alert.alert('Error creating split and exercises', error.message);
    }
  };

  return (
    <View className="flex-1 p-4">
      <View className="items-center mb-4">
        <Text className="text-xl font-bold">Create Split</Text>
        <TextInput
          className="border-2 rounded-lg w-64 p-2 mt-4"
          placeholder="Split Name"
          value={splitName}
          onChangeText={text => setSplitName(text)}
        />

        <Text className="text-lg mt-4">Exercises:</Text>
        {exercises.map((exercise, index) => (
          <Text key={index} className="text-md">
            {exercise.name} - ({exercise.sets} x {exercise.repsPerSet}) @ {exercise.weightUsed}
          </Text>
        ))}

        <TextInput
          className="border-2 rounded-lg w-64 p-2 mt-2"
          placeholder="Exercise Name"
          value={exerciseName}
          onChangeText={text => setExerciseName(text)}
        />
        <View className="border-2 rounded-lg w-64 mt-2">
            <SelectDropdown
            data={muscleGroups}
            buttonStyle={{width: '100%', height: 35, borderRadius: 6, paddingRight: 10}}
            buttonTextStyle={{ fontSize: 14, paddingVertical: 0, marginLeft: -5, fontWeight: '400', textAlign: 'left'}}
            defaultButtonText={"Muscle Group: " + muscleGroup}
            renderDropdownIcon={() => (
                <Ionicons
                    name={'caret-down-outline'}>
                </Ionicons>
            )}
            onSelect={(selectedItem) => setMuscleGroup(selectedItem)}
            buttonTextAfterSelection={(selectedItem) => "Muscle Group: " + selectedItem}
            rowTextForSelection={(item) => item}
            />
        </View>
        <TextInput
          className="border-2 rounded-lg w-64 p-2 mt-2"
          placeholder="Sets"
          keyboardType="numeric"
          value={sets}
          onChangeText={text => setSets(text)}
        />
        <TextInput
          className="border-2 rounded-lg w-64 p-2 mt-2"
          placeholder="Reps per Set"
          value={repsPerSet}
          onChangeText={text => setRepsPerSet(text)}
        />
        <TextInput
          className="border-2 rounded-lg w-64 p-2 mt-2"
          placeholder="Weight Used"
          keyboardType="numeric"
          value={weightUsed}
          onChangeText={text => setWeightUsed(text)}
        />

        <TouchableOpacity
          className="bg-blue-500 py-3 px-6 rounded-lg mt-4"
          onPress={handleAddExercise}
        >
          <Text className="text-white text-lg font-bold">Add Exercise</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-blue-500 py-3 px-6 rounded-lg"
        onPress={handleCreateSplit}
      >
        <Text className="text-white text-lg font-bold">Create Split</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateSplitScreen;
