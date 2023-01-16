import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SvgXml } from 'react-native-svg'
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constants'
import { useNavigation } from '@react-navigation/native';


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const LaunchPadDetails = (data) => {
    const navigation = useNavigation();
    const [Data, setData] = useState([]);
    const data1 = data.route.params.item;

    useEffect(() => {
        Launches();
    }, []);

    const Launches = async () => {
        try {
            const response = await fetch(`https://api.spacexdata.com/v4/launchpads/${data1.launches}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <TouchableOpacity style={styles.arrow}>
                <SvgXml xml={leftArrow} width={20} height={16} onPress={() => navigation.goBack()} />
                <Text style={styles.heading}>LaunchPad Details</Text>
            </TouchableOpacity>
            <ImageBackground key={data1.id} source={{ uri: data1.images.large[0] }} style={styles.image} />
            <ScrollView style={styles.scroll}>
                <View style={styles.header}>
                    <Text style={styles.heading}>{data1.name}</Text>
                    <Text style={styles.heading1}>{data1.region}</Text>
                </View>
                <View style={styles.LaunchPadDetails}>
                    <Text style={[styles.heading1, { color: data1.status === 'active' ? 'green' : 'red' }]}>Status : {data1.status}</Text>
                    <Text style={styles.heading1}>Location : {data1.locality}</Text>
                    <Text style={styles.heading1}>Details : </Text>
                    <Text style={styles.Text}>{data1.details}</Text>
                    {data1.wikipedia ?
                        <>
                            <Text style={styles.heading1}>Wiki : </Text>
                            <Text style={styles.Text}>{data1.wikipedia}</Text>
                        </>
                        : null}
                    {data1.vehicles_launched ?
                        <>
                            <Text style={styles.heading1}>Launches : </Text>
                            {Data.map((item, i) => (
                                <Text key={i} style={styles.Text}>{item.name}</Text>
                            ))}
                        </>
                        : null}
                </View>
            </ScrollView>
        </View>
    )
}

export default LaunchPadDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
    },
    header: {
        marginTop: 20,
    },
    heading: {
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular2,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.medium,
        marginLeft: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    },
    heading1: {
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular2,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.medium,
        marginLeft: 20,
        marginTop: 10,
    },
    Text: {
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular2,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.regular,
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        lineHeight: 20,
    },
    arrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
})