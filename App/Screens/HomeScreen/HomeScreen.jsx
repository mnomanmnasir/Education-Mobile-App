import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {

    return (
        <ScrollView>
            <Header />
            <View style={{ padding: 20 }}>
                {/* Slider */}
                <Slider />
                {/* Categories */}
                <Categories />
                <BusinessList />
            </View>
        </ScrollView>
    )
}