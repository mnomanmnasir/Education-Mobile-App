import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Color from '../../Utiles/Color';
import Heading from '../../Heading/Heading'
import GlobalApi from '../../Utiles/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment'


export default function BookingModal({ businessId, hideModal }) {


    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState();
    const { user } = useUser();

    useEffect(() => {
        getTime();
    }, [])

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 7; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeList(timeList)
    }

    // create booking method
    const createNewBooking = () => {

        if (!selectedTime || !selectedDate) {
            ToastAndroid.show('Please select Data and Time', ToastAndroid.LONG)
            return;
        }
        const data = {
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress.emailAddress,
            time: selectedTime,
            date: moment(selectedDate).format('DD-MM-YYYY'),
            businessId: businessId
        }
        GlobalApi.createBooking(data).then(res => {
            console.log(res)
            ToastAndroid.show('Booking Created Successfully!',
                ToastAndroid.LONG)
            hideModal();
        })
    }
    return (
        <ScrollView>

            <KeyboardAvoidingView style={{ padding: 20, marginTop: 30 }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 20 }} onPress={() => hideModal()}>
                    <Ionicons name="arrow-back-outline" size={30} color="black" />
                    <Text style={{ fontSize: 25 }}>
                        Add Courses
                    </Text>
                </TouchableOpacity>

                {/* Calendar Section */}

                <Heading text={'Select Date'} />
                <View style={styles.calendarContainer}>

                    <CalendarPicker onDateChange={setSelectedDate}
                        width={340}
                        minDate={Date.now()}
                        todayBackgroundColor={Color.PRIMARY}
                        todayTextStyle={{ color: Color.WHITE }}
                        selectedDayColor={Color.BLACK}
                        selectedDayTextColor={Color.WHITE}
                    />

                </View>

                {/* time select */}
                <View style={{ marginTop: 20 }}>
                    <Heading text={'Select Time Slot'} />
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={timeList}
                        renderItem={({ item, index }) => (
                            < TouchableOpacity style={[selectedTime === item.time ? styles.selectedTime : styles.unSelectedTime]}
                                onPress={() => setSelectedTime(item.time)}
                            >

                                <Text style={{ color: Color.PRIMARY }}>
                                    {
                                        item.time
                                    }
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Anyone Note Section */}
                <View style={{ marginTop: 20 }}>
                    <Heading text={'Any Suggestion Note'} />
                    <TextInput placeholder='Note' style={styles.noteTextarea} numberOfLines={2} multiline={true}
                        onChange={(text) => setNote(text)}
                    />
                </View>

                {/* confirmation button */}
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => createNewBooking()}>
                    <Text style={styles.confirmBtn}>
                        Confirm & Book
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    calendarContainer: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: Color.PRIMARY_LIGHT
    },
    unSelectedTime: {
        paddingHorizontal: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: Color.PRIMARY,
        borderRadius: 99,
        marginRight: 10
    },

    selectedTime: {
        paddingHorizontal: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: Color.PRIMARY,
        borderRadius: 99,
        backgroundColor: Color.PRIMARY_LIGHT,
        marginRight: 10,

    },
    noteTextarea: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: 'top',
        padding: 20,
        fontSize: 16,
        borderColor: Color.PRIMARY
    },
    confirmBtn: {
        textAlign: 'center',
        fontSize: 17,
        backgroundColor: Color.PRIMARY,
        color: Color.WHITE,
        padding: 13,
        borderRadius: 50,
        elevation: 2

    }

}) 