import { darkModeColors, lightModeColors } from '@/assets/colors/colors';
import { Appearance } from 'react-native';
import {create} from 'zustand'

export type IColors = {
  primaryBackground: string;
  secondaryBackground: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  switchThumb: string;
  switchTrack: string;
  primary: string;
  switchOn: string;
  switchOff: string;
};

interface ThemeStore {
    theme: boolean;
    setTheme: (newTheme: boolean) => void;
    activeColors:IColors | null,
    setActiveColors: (newColors:IColors) => void
}

const initialColorScheme = Appearance.getColorScheme() ?? 'light';

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: initialColorScheme === 'dark' ? true : false,
    setTheme: (newTheme) => set({ theme: newTheme }),
    activeColors: initialColorScheme === 'light' ? lightModeColors : darkModeColors,
    setActiveColors: (newColors) => set({ activeColors: newColors }),
}));