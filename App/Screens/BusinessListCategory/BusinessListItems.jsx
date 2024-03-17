import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../Utiles/Color'
import { FontAwesome6 } from '@expo/vector-icons';


export default function BusinessListItems({ business }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: business?.images[0]?.url }}
                style={styles.image}
            />
            <View style={styles.subContainer}>
                <Text style={{
                    color: Color.GRAY,
                    fontSize: 15
                }}>
                    {business?.contactPerson}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {business?.name}
                </Text>
                <Text style={{ color: Color.GRAY, fontSize: 16 }}>
                    <FontAwesome6 name="location-dot" size={20} color={Color.PRIMARY}/>
                    {business?.address}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: Color.WHITE,
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    subContainer: {
        display: 'flex',
        gap: 8
    }
})