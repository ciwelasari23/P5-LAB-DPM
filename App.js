import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

// Tema pink
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#E91E63', // Pink utama
        accent: '#F48FB1', // Pink terang
        background: '#FCE4EC', // Pink muda untuk background
        surface: '#F8BBD0', // Pink lembut untuk Card
    },
};

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{ title: 'Articles' }} 
                    />
                    <Stack.Screen 
                        name="Details" 
                        component={DetailsScreen} 
                        options={{ title: 'Article Details' }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
