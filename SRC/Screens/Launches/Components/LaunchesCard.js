import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constants'

const LaunchesCard = ({ heading, describe, image, onPress, width }) => {
    return (
        <View style={[styles.card, { width: width }]}>
            <View style={styles.imagebox}>
                {image === null ? <Image source={require('../../../Assets/Photos/logo.png')} style={styles.image} /> :
                    <Image source={{ uri: image }} style={styles.image} />}
            </View>
            <View style={styles.textbox}>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View style={styles.textcontent}>
                <Text numberOfLines={3} style={styles.text}>{describe}</Text>
            </View>
            <View style={styles.textcontent1}>
                <TouchableOpacity style={styles.textbox1} onPress={onPress}>
                    <Text style={styles.text1}>View more</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LaunchesCard

const styles = StyleSheet.create({
    card: {
        width: 193,
        height: 284,
        backgroundColor: colors.CardBackground,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: colors.CardBackgroundStroke,
        overflow: 'hidden',
        marginBottom: 20,
    },
    imagebox: {
        width: '90%',
        height: '35%',
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    textbox: {
        width: '90%',
        height: 'auto',
        marginLeft: 10,
        overflow: 'hidden',
    },
    heading: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        marginTop: 20,
        letterSpacing: 2,
    },
    textcontent: {
        width: '90%',
        height: '30%',
        paddingVertical: 10,
        marginLeft: 10,
        overflow: 'hidden',
    },
    text: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.PostTitleQuestion,
        fontFamily: fontfamily.fontRegular,
        lineHeight: 20,
    },
    textcontent1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    textbox1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.TabColor,
        borderRadius: 15,
    },
    text1: {
        fontSize: fontsize.paragraph,
        fontWeight: fontWeight.medium,
        color: colors.HeadingProfileTitles,
        fontFamily: fontfamily.fontRegular,
        // padding: 5,
    },
    text2: {
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        color: colors.primarycolor,
        fontFamily: fontfamily.fontRegular,
    },
})
