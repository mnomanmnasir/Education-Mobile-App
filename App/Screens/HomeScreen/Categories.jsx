import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utiles/GlobalApi'
import Heading from '../../Heading/Heading'
import Color from '../../Utiles/Color'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategory()
    })

    const navigation = useNavigation();

    const getCategory = () => {
        GlobalApi.getCategory().then(res => {
            // console.log(res?.categories)
            setCategories(res?.categories) // Update categories state with fetched data
        })
    }

    return (
        <View style={{ marginTop: 10 }}>

            <Heading text={'Top Categories'} isViewAll={true} />
            <FlatList
                numColumns={4}
                data={categories}
                renderItem={({ index, item }) => (
                    <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-list', {
                        categorie: item.name
                    })}>
                        <View style={styles.icons}>
                            <Image source={{ uri: item?.icon?.url }} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text>
                            {item?.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    icons: {
        backgroundColor: Color.LIGHT_GREY,
        borderRadius: 99,
        padding: 17
    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
})