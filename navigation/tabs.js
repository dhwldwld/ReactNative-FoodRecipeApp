import React from 'react';
import { View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens';
import { TabIcon } from '../components';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: COLORS.white,
        borderTopColor: 'transparent',
        height: 100,
    },
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 80,
                },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                        case 'Home':
                            return <TabIcon focused={focused} icon='home-outline' />;
                        case 'Search':
                            return <TabIcon focused={focused} icon='search-outline' />;
                        case 'Bookmark':
                            return <TabIcon focused={focused} icon='bookmark-outline' />;
                        case 'Settings':
                            return <TabIcon focused={focused} icon='settings-outline' />;
                    }
                },
            })}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Search' component={Home} />
            <Tab.Screen name='Bookmark' component={Home} />
            <Tab.Screen name='Settings' component={Home} />
        </Tab.Navigator>
    );
};

export default Tabs;
