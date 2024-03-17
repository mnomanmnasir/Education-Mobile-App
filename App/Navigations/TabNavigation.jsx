import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Color from '../Utiles/Color';
import HomeNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Color.PRIMARY
        }}>
            <Tab.Screen name="home" component={HomeNavigation} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
            }}
            />
            <Tab.Screen name="booking" component={BookingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" size={size} color={color} />
                ),
            }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}