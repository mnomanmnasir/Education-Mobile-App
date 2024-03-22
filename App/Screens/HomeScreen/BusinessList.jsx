import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Heading/Heading'
import GlobalApi from '../../Utiles/GlobalApi'
import BusinessListImages from './BusinessListImages'


export default function BusinessList() {

    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        getBusinessList()
    })

    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(res => {
            // console.log(res);
            setBusinessList(res.businessLists)
        })
    }

    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={'My Courses'} isViewAll={true} />
        <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) => (
                    <View style={{ marginRight: 10 }}>
                        <BusinessListImages business={item} />
                    </View>
                )}
            /> 
        </View>
    )
}