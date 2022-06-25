import React from 'react';
import {View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';

const TabIcon = ({focused, icon}) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                width: 50,
            }}>
            <Icon 
                name={icon}
                size={30}
                color={focused ? COLORS.darkGreen : COLORS.lightLime}
            />

            {focused && (
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        backgroundColor: COLORS.darkGreen,
                    }}
                />
            )}
        </View>
    );
};

export default TabIcon;