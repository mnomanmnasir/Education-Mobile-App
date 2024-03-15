import { View, Text, FlatList, StyleSheet, Image } from 'react-native'


export default function heading({ text, isViewAll = false }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                {text}
            </Text>
            <Text>
                View All
            </Text>
        </View>

    )

}


const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginBottom: 10
    },
    container:{
        
    }
})