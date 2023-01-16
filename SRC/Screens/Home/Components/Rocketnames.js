import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RocketData } from '../../../Api'
import { SvgXml } from 'react-native-svg'
import { colors, fontsize, fontWeight, fontfamily } from '../../../Constants'
import RocketCard from '../../Rockets/components/RocketCard'
import { useNavigation } from '@react-navigation/native'



const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const Rocketnames = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await RocketData();
        setData(response);
        setLoading(false);
    };
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <SvgXml xml={leftArrow} width={20} height={16} />
                <Text style={styles.heading}>Rockets</Text>
            </TouchableOpacity>
            {loading ? (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={colors.Textcolor} />
                </View>
            ) : (
                <ScrollView style={styles.scroll}>
                    {data.map((item, i) => (
                        <RocketCard
                            key={i}
                            heading={item.name}
                            company={item.company}
                            country={item.country}
                            image={item.flickr_images[0]}
                        />
                    ))}
                </ScrollView>
            )}
        </View>
    )
}

export default Rocketnames

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
        marginBottom: 10,
        marginLeft: 20,
    },
    heading: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        marginLeft: 10,
    },
    scroll: {
        width: '100%',
        height: '100%',
    },


})