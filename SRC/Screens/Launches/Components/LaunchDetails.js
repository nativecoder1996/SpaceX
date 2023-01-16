import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constants'

const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const LaunchDetails = (data) => {
    const data1 = data.route.params.item
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
                    <SvgXml xml={leftArrow} />
                </TouchableOpacity>
                <Text style={styles.heading}>Launches Details</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.LaunchDetails}>
                    <Image source={{ uri: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' }} style={styles.Image} />
                    <Text style={styles.name}>{data1.name}</Text>
                    <Text style={styles.launchDate}>Launch Date : {data1.date_utc}</Text>
                    <Text style={[styles.status, { color: data1.success ? colors.success : colors.failed }]}>{data1.success ? 'Success' : 'Failed'}</Text>
                    <Text style={styles.details1}>Reason :</Text>
                    <Text style={styles.details}>{data1.details}</Text>
                    <Text style={styles.details1}>Article :</Text>
                    <TouchableOpacity onPress={() => { Linking.openURL(data1.links.article) }}>
                        <Text style={styles.links}>{data1.links.article}</Text>
                    </TouchableOpacity>
                    <Text style={styles.details1}>Video :</Text>
                    <TouchableOpacity onPress={() => { Linking.openURL(data1.links.webcast) }}>
                        <Text style={styles.links}>{data1.links.webcast}</Text>
                    </TouchableOpacity>
                    <Text style={styles.details1}>Wikipedia :</Text>
                    <TouchableOpacity onPress={() => { Linking.openURL(data1.links.wikipedia) }}>
                        <Text style={styles.links}>{data1.links.wikipedia}</Text>
                    </TouchableOpacity>
                    <Text style={styles.details1}>Reddit :</Text>
                    <TouchableOpacity>
                        <Text style={styles.links}>{data1.links.reddit.launch}</Text>
                    </TouchableOpacity>
                    <Text style={styles.details1}>Presskit :</Text>
                    <TouchableOpacity>
                        <Text style={styles.links}>{data1.links.presskit}</Text>
                    </TouchableOpacity >
                    <Text style={styles.details1}>Mission Patch :</Text>
                    <TouchableOpacity onPress={() => { Linking.openURL(data1.links.patch.small) }}>
                        <Text style={styles.links}>{data1.links.patch.small}</Text>
                    </TouchableOpacity>
                    <Text style={styles.details1}>Flickr :</Text>
                    <TouchableOpacity>
                        <Text style={styles.links}>{data1.links.flickr.original}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default LaunchDetails

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
    LaunchDetails: {
        marginLeft: 15,
        marginTop: 20,
    },
    name: {
        fontSize: fontsize.bigheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginTop: 10,
    },
    launchDate: {
        fontSize: fontsize.smallheading,
        color: colors.PostDescriptionAnswer,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginTop: 10,
    },
    status: {
        fontSize: fontsize.smallheading,
        color: colors.PostDescriptionAnswer,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginTop: 10,
    },
    details: {
        fontSize: fontsize.smallheading,
        color: colors.PostDescriptionAnswer,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginTop: 10,
    },
    details1: {
        fontSize: fontsize.heading,
        color: colors.PostDescriptionAnswer,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginTop: 20,
    },
    links: {
        fontSize: fontsize.smallheading,
        color: colors.TabColor,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    Image: {
        width: '95%',
        height: 200,
        borderRadius: 50,
    },

})