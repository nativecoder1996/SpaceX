import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontsize, fontWeight, fontfamily } from '../../../Constants'
import FastImage from 'react-native-fast-image'


const RocketCard = ({ heading, company, country, onPress, image }) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#348f4112', '#348f4130', '#000000']} style={styles.LinearGradient} zIndex={1} >
                <FastImage
                    style={{ width: '100%', height: '100%', borderRadius: 10, zIndex: -1 }}
                    source={{
                        uri: image,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.TextBox}>
                    <Text style={styles.Text}>{heading}</Text>
                    <View style={styles.FooterBox}>
                        <View style={styles.Footer}>
                            <Text style={styles.Text1}>{company}</Text>
                            <Text style={styles.Text1}>|</Text>
                            <Text style={styles.Text1}>{country}</Text>
                        </View>
                        <TouchableOpacity style={styles.Button} onPress={onPress}>
                            <Text style={styles.Text2}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default RocketCard

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '95%',
        height: 200,
        backgroundColor: colors.ViewInterviewBG,
        borderWidth: 1,
        borderColor: colors.IconStroke,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    LinearGradient: {
        width: '100%',
        borderRadius: 10,
    },
    TextBox: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        borderRadius: 10,
    },
    Text: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.regular,
        marginLeft: 10,
    },
    Footer: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    Text1: {
        color: colors.PostDescriptionAnswer,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.medium,
        marginRight: 5,
    },
    Button: {
        width: 70,
        height: 28,
        borderRadius: 15,
        backgroundColor: colors.FollowBtnBG,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    Text2: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
    },
    FooterBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 0,
    },
})