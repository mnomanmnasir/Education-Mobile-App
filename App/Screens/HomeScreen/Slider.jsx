import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utiles/GlobalApi'
import Heading from '../../Heading/Heading'

export default function Slider() {


    const [sliders, setSliders] = useState([])
    useEffect(() => {
        getSlider()
    })

    const getSlider = () => {
        GlobalApi.getSlider().then(res => {
            console.log('response', res.sliders)
            setSliders(res?.sliders)
        })
    }

    return (
        <View>
            <Heading text={'Offer For You'} />
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={sliders}
                renderItem={({ index, item }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image source={{ uri: item?.image?.url }} style={styles.sliderImage} />

                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginBottom: 10
    },
    sliderImage: {
        width: 370,
        height: 150,
        borderRadius: 20,
        objectFit: 'cover'
    }
})