import { View, Text, FlatList , ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from './../../Heading/PageHeading'
import GlobalApi from '../../Utiles/GlobalApi'
import { useUser } from '@clerk/clerk-expo';
import BusinessListItems from './../BusinessListCategory/BusinessListItems'



export default function BookingScreen() {

  const [bookingList, setBookingList] = useState([])
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    user && getUserBooking()
  }, [user])
  const getUserBooking = () => {
    // setLoading(true)
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(res => {
      console.log(res.bookings)
      setBookingList(res.bookings)
      setLoading(false)
    })
  }

  return (
    <View style={{ padding: 25, gap: 20 }}>
      <Text style={{ gap: 10, fontSize: 26, fontWeight: 'bold', marginBottom: 10}}>
      Course Details
      </Text>


      <View>
        <FlatList
          data={bookingList}
          onRefresh={() => getUserBooking()}
          refreshing={loading}
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