import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors, fontWeight, fontfamily, fontsize } from '../../../Constants'
import { SvgXml } from 'react-native-svg'
import CrewCard from './CrewCard';


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const CrewPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <SvgXml xml={leftArrow} width={20} height={16} />
                </TouchableOpacity>
                <Text style={styles.title}>Crew</Text>
            </View>
            <View style={styles.box}>
                <CrewCard />
            </View>

        </View>
    )
}

export default CrewPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        paddingBottom: 70,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        borderRadius: 10,
        padding: 15,
    },
    title: {
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular2,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.medium,
    },
    box: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginTop: 20,
        overflow: 'hidden',
    },

})