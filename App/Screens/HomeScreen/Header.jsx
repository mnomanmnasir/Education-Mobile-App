import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Color from '../.././Utiles/Color'
import { FontAwesome } from '@expo/vector-icons';


export default function Header() {

    const { user, isLoading } = useUser();

    return user && (
        <View style={styles.container}>

            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
                    <View>
                        <Text style={{ color: Color.WHITE }}>
                            Welcome,
                        </Text>
                        <Text style={{ color: Color.WHITE, fontSize: 20 }}>
                            {user?.fullName}
                        </Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            <View style={styles.searchBarInput}>
                <TextInput placeholder='Search' style={styles.textInput}
                />
                <FontAwesome name="search" style={styles.searchBtn} size={24} color={Color.PRIM} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Color.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },

    profileMainContainer: {

        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    profileContainer: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    searchBarInput: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },

    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Color.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },

    searchBtn: {
        backgroundColor: Color.WHITE,
        padding: 10,
        borderRadius: 8
    },


    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },

})