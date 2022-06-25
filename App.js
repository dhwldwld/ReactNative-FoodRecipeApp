import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

// screens
import { Home, Login, PlantDetail, Recipe } from './screens';

// extra screens
import Tabs from './navigation/tabs';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName='Tabs'>
                {/* Screens */}
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='PlantDetail' component={PlantDetail} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='Recipe' component={Recipe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
