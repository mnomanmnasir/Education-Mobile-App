import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Heading from '../../Heading/Heading'
import BusinessList from '../HomeScreen/BusinessList'


export default function CoursesPhotos({ business }) {
    return (
        <View>
            <Heading text={'Photos'} />
            {/* <FlatList
                data={business.images}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={{ width: '50%', height: 120 , borderRadius: 30}} />
                )}
            /> */}
        </View>
    )
}
