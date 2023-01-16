import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView, Linking } from 'react-native'
import React from 'react'
import { colors, fontWeight, fontfamily, fontsize } from '../../../Constants'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const CrewDetails = (data) => {
    const navigation = useNavigation();
    const data1 = data.route.params.item
    console.log(data1)

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <ImageBackground source={{ uri: data1.image }} style={{ width: '100%', height: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                        <SvgXml xml={leftArrow} width={20} height={16} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Textbox}>
                    <View style={styles.viewBox}>
                        <Text style={styles.Text}>Name  : </Text>
                        <Text style={styles.Text1}>{data1.name}</Text>
                    </View>
                    <View style={styles.viewBox}>
                        <Text style={styles.Text}>Agency  : </Text>
                        <Text style={styles.Text1}>{data1.agency}</Text>
                    </View>
                    <View style={styles.viewBox}>
                        <Text style={styles.Text}>Status  : </Text>
                        <Text style={[styles.Text1, { color: data1.status == 'active' ? colors.success : colors.failed }]}>{data1.status}</Text>
                    </View>
                    <View style={styles.viewBox}>
                        <Text style={styles.Text}>Wikipedia  : </Text>
                        <TouchableOpacity onPress={() => Linking.openURL(data1.wikipedia)}>
                            <Text style={styles.Text2}>View on Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default CrewDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,

    },
    Text: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.medium,
        marginVertical: 10,
    },
    Text1: {
        color: colors.PostDescriptionAnswer,
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.medium,
        marginVertical: 10,
    },
    Text2: {
        color: colors.TabColor,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.medium,
        marginVertical: 10,
        textDecorationLine: 'underline',
        backgroundColor: colors.CardBackground,
        padding: 5,
        borderRadius: 5,
        overflow: 'hidden',
    },
    Textbox: {
        position: 'absolute',
        bottom: 120,
        width: '100%',
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    viewBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
})
