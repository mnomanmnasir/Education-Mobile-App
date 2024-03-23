import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import Color from '../../Utiles/Color';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
import { useIsFocused } from '@react-navigation/native';


WebBrowser.maybeCompleteAuthSession();
export default function login() {
    useWarmUpBrowser();
    const isFocused = useIsFocused();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            if (error.message === 'User cancelled the prompt') {
                // Handle user cancellation
                Alert.alert('Login Cancelled', 'You have cancelled the login process.');
            } else {
                // Handle other errors
                console.error("OAuth error", error);
                Alert.alert('Login Error', 'An error occurred during login. Please try again later.');
            }
        }
    }, []);

    tabBarVisible = 'false' // Hide content when screen is not focused
    if (!isFocused) {
        return null;
    }

    return (
        <View style={{ alignItems: 'center' }}>
            {/* <Image source={require('../../../assets/login.png')} style={styles.loginImages} /> */}
            <LottieView
                style={{
                    width: 400,
                    height: 450,
                }}
                source={require("../../../assets/Animation/login.json")}
                autoPlay
                loop
            />

            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: Color.WHITE, textAlign: 'center' }}>
                    Let's Find
                    <Text style={{ fontWeight: 'bold' }}> Professional Cleaning and Repair
                    </Text>
                </Text>
                <Text style={{ fontSize: 17, color: Color.WHITE, textAlign: 'center', marginTop: 20 }}>
                    Best App to find services near you which deliver you a professional Service
                </Text>
                <TouchableOpacity style={styles.button} onPress={onPress} >
                    <Text style={{ textAlign: 'center', color: Color.PRIMARY, fontWeight: 'bold' }}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImages: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Color.BLACK,
        borderRadius: 15
    },
    subContainer: {
        width: '100%',
        backgroundColor: Color.PRIMARY,
        height: '70%',
        marginTop: -70,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
    },
    button: {
        padding: 15,
        backgroundColor: Color.WHITE,
        borderRadius: 99,
        marginTop: 40
    }
})