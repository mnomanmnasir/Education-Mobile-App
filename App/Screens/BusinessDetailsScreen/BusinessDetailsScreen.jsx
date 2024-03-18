import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../Utiles/Color';
import { FontAwesome6 } from '@expo/vector-icons';
import Heading from '../../Heading/Heading'


export default function BusinessDetailsScreen() {

  const param = useRoute().params;
  const navigation = useNavigation()
  const [isReadMore, setReadMore] = useState(false);
  const [business, setBusiness] = useState(param.business)
  useEffect(() => {


  }, [])


  return business && (
    <View>
      <TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image source={{ uri: business?.images[0]?.url }} style={{ width: '100%', height: 300 }} />
      <View style={styles.infoContainer}>

        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{business?.name}</Text>

        <View style={styles.subContainer}>

          <Text style={{ color: Color.PRIMARY, fontSize: 20 }}>{business?.contactPerson}</Text>
          <Text style={{ color: Color.PRIMARY, backgroundColor: Color.PRIMARY_LIGHT, padding: 5, borderRadius: 5, fontSize: 14 }}>{business?.categorie.name}</Text>

        </View>

        <Text style={{fontSize: 16, color: Color.GRAY}}>
          <FontAwesome6 name="location-dot" size={17} color={Color.PRIMARY} />{business?.address}</Text>
      {/* Horizontal Line */}
      <View style={{ borderWidth: 0.4, color: Color.GRAY, marginTop: 20, marginBottom: 20 }}>
      </View>


      {/*About Section  */}
      <View>
        <Heading text={'About Me'} />
        <Text style={{ color: Color.GRAY, lineHeight: 28, fontSize: 16 }} numberOfLines={isReadMore?2:1}>
          {business.about}
        </Text>
        <TouchableOpacity onPress={() => setReadMore(!isReadMore)}>
          <Text style={{ color: Color.PRIMARY, fontSize: 16 }}>
           {isReadMore?'Read Less': 'Read More'}
          </Text>
        </TouchableOpacity>
      </View>
</View>
    </View>
  )
}


const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 20
  },
  infoContainer: {
    padding: 20,
    gap: 7,
    display: 'flex'
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  }
})