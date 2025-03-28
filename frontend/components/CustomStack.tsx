import { darkModeColors, lightModeColors } from '@/assets/colors/colors';
import { useThemeStore } from '@/stores/store';
import { Stack } from 'expo-router'
import React, { useEffect } from 'react'

export default function CustomStack({children}:{children:React.ReactNode}) {
    const { theme } = useThemeStore();
 
  return (
     <Stack initialRouteName="(auth)" screenOptions={{ contentStyle: { backgroundColor: theme ? "#181818" : '#F5F5F5', } }}>
        {children}
     </Stack>
  )
}
