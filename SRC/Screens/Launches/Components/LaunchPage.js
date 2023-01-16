import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constants';
import LaunchesCard from './LaunchesCard';


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const LaunchPage = (data) => {
    const [loading, setLoading] = useState(false);
    const data1 = data.route.params.data
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
                    <SvgXml xml={leftArrow} />
                </TouchableOpacity>
                <Text style={styles.heading}>Launches</Text>
            </View>
            {loading ? (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={colors.Textcolor} />
                </View>
            ) : (
                <View style={styles.scroll}>
                    <FlatList
                        data={data1}
                        renderItem={({ item }) => (
                            <LaunchesCard
                                heading={item.name}
                                date={item.date_utc}
                                success={item.success}
                                describe={item.details}
                                image={'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                width={175}
                                onPress={() => navigation.navigate('LaunchDetails', { item })}
                            />
                        )}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </View>
            )}
        </View>
    )
}

export default LaunchPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        paddingBottom: 70,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
    },
    heading: {
        fontSize: fontsize.heading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular,
    },
    arrow: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    scroll: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },


})