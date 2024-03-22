import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from './../../Heading/PageHeading'
import GlobalApi from '../../Utiles/GlobalApi'
import { useUser } from '@clerk/clerk-expo';
import BusinessListItems from './../BusinessListCategory/BusinessListItems'



export default function BookingScreen() {

  const [bookingList, setBookingList] = useState([])

  const { user } = useUser();

  useEffect(() => {
    user && getUserBooking()
  }, [user])
  const getUserBooking = () => {
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(res => {
      console.log(res.bookings)
      setBookingList(res.bookings)
    })
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
        My Courses
      </Text>


      <View>
        <FlatList
          data={bookingList}
          renderItem={({ item, index }) => (
            <BusinessListItems business={item?.businessList} 
            booking={item}
            />
          )}
        />
      </View>
    </View>

  )
}