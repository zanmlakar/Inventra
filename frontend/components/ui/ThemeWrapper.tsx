import { darkModeColors, lightModeColors } from '@/assets/colors/colors';
import { useThemeStore } from '@/stores/store';
import React, { useEffect } from 'react'
import { StatusBar, View } from 'react-native'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeStore();

    useEffect(()=>{
        const setActiveColors = theme ? darkModeColors : lightModeColors;
    },[])

    return (
        <View style={{ backgroundColor: theme ? '#181818' : '#F5F5F5', flex: 1 }}>
            <StatusBar
                translucent
                backgroundColor={theme ? "#181818" : '#F5F5F5'}
                barStyle={theme ? "light-content" : "dark-content"}
            />
            {children}
        </View>
    )
}
