import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utiles/GlobalApi'
import Heading from '../../Heading/Heading'
import Color from '../../Utiles/Color'

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategory()
    })

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
                    <View style={styles.container}>
                        <View style={styles.icons}>
                            <Image source={{ uri: item?.icon?.url }} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text>
                            {item?.name}
                        </Text>
                    </View>
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