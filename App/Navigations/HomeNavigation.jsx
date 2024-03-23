import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListCategory from '../Screens/BusinessListCategory/BusinessListCategory';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Login from '../Screens/LoginScreen/Login';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();


export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            tabBarVisible: false,

        }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="business-list" component={BusinessListCategory} />
            <Stack.Screen name='business-detail' component={BusinessDetailsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
                name="login-form"
                component={Login}
                options={{
                    headerShown: false, // Hide header on login screen
                    tabBarVisible: false // Hide tab bar on login screen
                }}
            />

            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />  */}
        </Stack.Navigator>
    )
}