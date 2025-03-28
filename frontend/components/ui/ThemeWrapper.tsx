import { darkModeColors, lightModeColors } from '@/assets/colors/colors';
import { useThemeStore } from '@/stores/store';
import React, { useEffect } from 'react'
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native'

export default function ThemeWrapper({ children,styles }: { children: React.ReactNode,styles?:StyleProp<ViewStyle> }) {
    const { theme,setActiveColors } = useThemeStore();
    
   useEffect(()=>{
        if(theme){
            setActiveColors(darkModeColors);
        }else{
            setActiveColors(lightModeColors);
        }
        
    },[theme])

    return (
        <View style={[{ backgroundColor: theme ? '#181818' : '#F5F5F5', flex: 1 },styles]}>
            <StatusBar
                translucent
                backgroundColor={theme ? "#181818" : '#F5F5F5'}
                barStyle={theme ? "light-content" : "dark-content"}
            />
            {children}
        </View>
    )
}
