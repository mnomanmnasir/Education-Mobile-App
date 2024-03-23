import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utiles/Color'
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


export default function BusinessListItems({ business, booking }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-detail', {
            business: business
        })}>
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
                {booking && business.address !== booking.address || (
                    <Text style={{ color: Color.GRAY, fontSize: 16 }}>
                        <FontAwesome6 name="location-dot" size={20} color={Color.PRIMARY} />
                        {business?.address}
                    </Text>
                )}

                {booking && booking.bookingStatus && (
                    <Text style={[
                        {
                            padding: 5, borderRadius: 5, fontSize: 14, width: 90
                        },
                        booking.bookingStatus === 'Completed' ? { backgroundColor: Color.LIGHT_GREEN, color: Color.GREEN }
                            : booking.bookingStatus === 'Withdraw' ? { backgroundColor: Color.LIGHT_RED, color: Color.RED }
                                : { color: Color.PRIMARY, backgroundColor: Color.PRIMARY_LIGHT }
                    ]}>
                        {booking.bookingStatus}
                    </Text>
                )}
                {
                    booking?.id && <Text style={{color: Color.GRAY, fontSize: 16}}><AntDesign name="calendar" size={20} color={Color.PRIMARY}/> {booking.date} at {booking.time}</Text>}
            </View>
        </TouchableOpacity>
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