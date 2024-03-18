import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListCategory from '../Screens/BusinessListCategory/BusinessListCategory';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';


const Stack = createStackNavigator();


export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="business-list" component={BusinessListCategory} />
            <Stack.Screen name='business-detail' component={BusinessDetailsScreen} />
            {/* <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />  */}
        </Stack.Navigator>
    )
}