import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import Color from '../../Utiles/Color';
import { useNavigation } from '@react-navigation/native';


export default function ProfileScreen() {

    const navigation = useNavigation();


    const profileMenu = [
        {
            id: 1,
            name: 'Home',
            icon: 'home'
        },
        {
            id: 2,
            name: 'My Courses',
            icon: 'bookmark-sharp'
        },
        {
            id: 3,
            name: 'Contact Us',
            icon: 'book'
        },
        {
            id: 4,
            name: 'Logout',
            icon: 'log-out'
        },


    ]


    const handleLogout = () => {
        // Perform logout action here
        // For now, simply navigate to the login screen
        navigation.navigate('login-form');
    };

    const { user } = useUser();

    return (
        <View>
            <View style={{ padding: 20, display: 'flex', paddingTop: 30, backgroundColor: Color.PRIMARY }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, gap: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: Color.WHITE, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
                        Profile
                    </Text>
                    <Image source={{ uri: user.imageUrl }}
                        style={{ width: 90, height: 90, borderRadius: 99 }}
                    />
                    <Text style={{ fontSize: 24, marginTop: 8, fontWeight: 'bold', color: Color.WHITE }}>
                        {user.fullName}
                    </Text>
                    {user?.primaryEmailAddress && (
                        <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold', color: Color.WHITE }}>
                            {user?.primaryEmailAddress.emailAddress}
                        </Text>
                    )}
                </View>
            </View>
            <View style={{ padding: 60 }}>
                <FlatList
                    data={profileMenu}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }} onPress={() => {
                            if (item.name === 'Logout') {
                                handleLogout();
                            } else {
                                // Navigate to respective screens for other menu options
                            }
                        }}
                        >
                            <Ionicons name={item.icon} size={34} color={Color.PRIMARY} />
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                {item?.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}