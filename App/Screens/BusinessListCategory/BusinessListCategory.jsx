import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utiles/GlobalApi';
import BusinessListItems from './BusinessListItems';
import Color from '../../Utiles/Color';
import PageHeading from '../../Heading/PageHeading';


export default function BusinessListCategory() {

    const param = useRoute().params;
    const navigation = useNavigation()
    const [businessList, setBusinessList] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        param && getBusinessListCategory()
    }, [param])

    const getBusinessListCategory = () => {
        GlobalApi.getBusinessListCategory(param.categorie).then(res => {
            setBusinessList(res.businessLists)
        })
    }

    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <PageHeading title={param.categorie} />

            {businessList.length > 0 ? <FlatList
                data={businessList}
                onRefresh={() => getBusinessListCategory()}
                refreshing={loading}
                style={{ marginTop: 10 }}
                renderItem={({ item, index }) => (
                    <BusinessListItems business={item} />
                )}
            /> : <Text style={{ fontSize: 20, textAlign: 'center', marginTop: '20%', color: Color.GRAY }}>
                No Courses Found
            </Text>
            }
        </View>
    )
}