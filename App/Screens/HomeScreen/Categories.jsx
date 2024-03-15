import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utiles/GlobalApi'
import Heading from '../../Heading/Heading'

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategory()
    })

    const getCategory = () => {
        GlobalApi.getCategory().then(res => {
            console.log(res?.categories)
        })
    }

    return (
        <View style={{marginTop: 10}}>
            <Heading text={'Categories'}/>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ index, item }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image source={{ uri: item?.icon?.url }} style={styles.sliderImage} />

                    </View>
                )}
            />
        </View>
    )
}


// const styles = StyleSheet.create({
//     heading: {
//         fontSize: 20,
//         marginBottom: 10,
//         marginTop: 10
//     },
//     sliderImage: {
//         width: 270,
//         height: 150,
//         borderRadius: 20,
//         objectFit: 'contain'
//     }
// })