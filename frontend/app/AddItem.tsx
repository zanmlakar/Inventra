import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import NavigateBack from '@/components/NavigateBack';
import { lightModeColors } from '@/assets/colors/colors';
import { useThemeStore } from '@/stores/store';

export default function AddItem() {
  const navigation = useNavigation();
  const { photoUri } = useLocalSearchParams();
  const photo = photoUri as string;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { activeColors } = useThemeStore();

  useEffect(() => {
    console.log(photoUri);
  }, [photoUri]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: activeColors.primaryBackground }]}>
      <NavigateBack />
      <View style={styles.topSection}>
        {photoUri && (
          <Image
            source={{ uri: photo }}
            style={[styles.image, { backgroundColor: activeColors.secondaryBackground }]}
            onError={(error) => console.log('Image loading error:', error.nativeEvent.error)}
          />
        )}
        <TextInput
          style={[styles.titleInput, styles.input, { backgroundColor: activeColors.secondaryBackground }]}
          placeholder="Title"
          placeholderTextColor={activeColors.secondaryText}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <TextInput
        style={[styles.descriptionInput, styles.input, { backgroundColor: activeColors.secondaryBackground }]}
        placeholder="Description"
        placeholderTextColor={activeColors.secondaryText}
        multiline
        value={description}
        onChangeText={setDescription}
      />
      
      
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Save')} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:5,
    marginRight: 10,
  },
  titleInput: {
    flex: 1,
  },
  input: {
    color:'white',
    padding: 12,
    marginBottom: 5,
    borderRadius: 5,
    flex: 1,
    textAlignVertical: 'top',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: lightModeColors.primary,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});