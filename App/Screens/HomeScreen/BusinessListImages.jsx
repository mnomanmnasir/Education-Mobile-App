import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utiles/Color'
import { useNavigation } from '@react-navigation/native'


export default function BusinessListImages({ business }) {


    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={{ uri: business?.images[0]?.url }}
                style={styles.images}
            />
            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                    {business?.name}
                </Text>
                <Text style={{ fontSize: 13 , color: Color.GRAY}}>
                    {business?.contactPerson}
                </Text>
                <Text style={{ fontSize: 10, padding: 3, color: Color.PRIMARY, backgroundColor: Color.PRIMARY_LIGHT , borderRadius: 3, alignSelf: 'flex-start', paddingHorizontal: 7}}>
                    {business.categorie.name}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    images: {

        width: 160,
        height: 100,
        borderRadius: 10
    },
    container: {
        padding: 10,
        backgroundColor: Color.WHITE,
        borderRadius: 10
    },
    infoContainer:{
        padding: 7,
        display: 'flex',
        gap: 3
    }
})