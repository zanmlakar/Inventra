import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        console.log(`Attempting to get token for key: ${key}`);
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐: ${item}`);
        } else {
          console.log('No values stored under key: ' + key);
        }
        return item;
      } catch (error) {
        console.error('SecureStore getItem error: ', error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: async (key: string, token: string) => {
      try {
        console.log(`Saving token for key: ${key}`);
        await SecureStore.setItemAsync(key, token);
        console.log(`Token saved successfully for key: ${key}`);
      } catch (error) {
        console.error('SecureStore setItem error: ', error);
      }
    },
  };
};

// SecureStore is not supported on the web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined;