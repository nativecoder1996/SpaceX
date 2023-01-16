import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image, Linking } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constants'
import { useNavigation } from '@react-navigation/native'


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const link = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5863 2.58592C11.7708 2.3949 11.9915 2.24254 12.2355 2.13772C12.4795 2.0329 12.742 1.97773 13.0075 1.97542C13.2731 1.97311 13.5364 2.02371 13.7822 2.12428C14.028 2.22484 14.2513 2.37334 14.4391 2.56113C14.6269 2.74892 14.7754 2.97222 14.876 3.21801C14.9765 3.4638 15.0271 3.72716 15.0248 3.99272C15.0225 4.25828 14.9673 4.52072 14.8625 4.76473C14.7577 5.00874 14.6053 5.22943 14.4143 5.41392L11.4143 8.41392C11.0393 8.78886 10.5307 8.99949 10.0003 8.99949C9.47 8.99949 8.96138 8.78886 8.58633 8.41392C8.39772 8.23176 8.14512 8.13097 7.88292 8.13325C7.62073 8.13552 7.36991 8.24069 7.18451 8.4261C6.9991 8.61151 6.89393 8.86232 6.89165 9.12452C6.88937 9.38671 6.99017 9.63932 7.17232 9.82792C7.92244 10.5778 8.93967 10.9991 10.0003 10.9991C11.061 10.9991 12.0782 10.5778 12.8283 9.82792L15.8283 6.82792C16.557 6.07351 16.9601 5.0631 16.951 4.01431C16.9419 2.96553 16.5212 1.96228 15.7796 1.22065C15.038 0.479013 14.0347 0.0583372 12.9859 0.0492235C11.9371 0.0401098 10.9267 0.443287 10.1723 1.17192L8.67232 2.67192C8.57681 2.76417 8.50063 2.87451 8.44822 2.99652C8.39581 3.11852 8.36823 3.24974 8.36707 3.38252C8.36592 3.5153 8.39122 3.64698 8.4415 3.76987C8.49178 3.89277 8.56604 4.00442 8.65993 4.09831C8.75382 4.19221 8.86547 4.26646 8.98837 4.31674C9.11127 4.36702 9.24295 4.39232 9.37573 4.39117C9.5085 4.39002 9.63972 4.36243 9.76173 4.31002C9.88373 4.25761 9.99408 4.18143 10.0863 4.08592L11.5863 2.58592ZM6.58632 7.58592C6.96138 7.21098 7.47 7.00035 8.00032 7.00035C8.53065 7.00035 9.03927 7.21098 9.41432 7.58592C9.50657 7.68143 9.61692 7.75761 9.73892 7.81002C9.86092 7.86243 9.99214 7.89002 10.1249 7.89117C10.2577 7.89232 10.3894 7.86702 10.5123 7.81674C10.6352 7.76646 10.7468 7.69221 10.8407 7.59832C10.9346 7.50442 11.0089 7.39277 11.0591 7.26987C11.1094 7.14698 11.1347 7.0153 11.1336 6.88252C11.1324 6.74974 11.1048 6.61852 11.0524 6.49652C11 6.37451 10.9238 6.26417 10.8283 6.17192C10.0782 5.42204 9.06098 5.00077 8.00032 5.00077C6.93967 5.00077 5.92244 5.42204 5.17232 6.17192L2.17232 9.17192C1.79028 9.54091 1.48556 9.98229 1.27592 10.4703C1.06628 10.9583 0.955938 11.4832 0.951323 12.0143C0.946708 12.5454 1.04791 13.0722 1.24904 13.5637C1.45016 14.0553 1.74717 14.5019 2.12274 14.8775C2.49832 15.2531 2.94492 15.5501 3.43651 15.7512C3.92809 15.9523 4.45481 16.0535 4.98593 16.0489C5.51705 16.0443 6.04193 15.934 6.52994 15.7243C7.01796 15.5147 7.45934 15.21 7.82832 14.8279L9.32832 13.3279C9.42383 13.2357 9.50002 13.1253 9.55243 13.0033C9.60483 12.8813 9.63242 12.7501 9.63357 12.6173C9.63473 12.4845 9.60943 12.3529 9.55915 12.23C9.50887 12.1071 9.43461 11.9954 9.34072 11.9015C9.24683 11.8076 9.13517 11.7334 9.01228 11.6831C8.88938 11.6328 8.7577 11.6075 8.62492 11.6087C8.49214 11.6098 8.36092 11.6374 8.23892 11.6898C8.11692 11.7422 8.00657 11.8184 7.91432 11.9139L6.41432 13.4139C6.22983 13.6049 6.00914 13.7573 5.76513 13.8621C5.52113 13.9669 5.25869 14.0221 4.99313 14.0244C4.72757 14.0267 4.46421 13.9761 4.21842 13.8756C3.97262 13.775 3.74932 13.6265 3.56153 13.4387C3.37375 13.2509 3.22524 13.0276 3.12468 12.7818C3.02412 12.536 2.97352 12.2727 2.97582 12.0071C2.97813 11.7416 3.0333 11.4791 3.13812 11.2351C3.24294 10.9911 3.3953 10.7704 3.58632 10.5859L6.58632 7.58592Z" fill="#D6D6D6"/>
</svg>`
const RoadstarPage = (data) => {
    const navigation = useNavigation();
    const data1 = data.route.params.item;
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
            <View style={styles.header}>
                <Image source={{ uri: data1.flickr_images[2] }} style={styles.image} />
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <SvgXml xml={leftArrow} width={20} height={16} />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: data1.flickr_images[0] }} style={styles.logo} />
            <View style={styles.headerText}>
                <Text style={styles.title}>{data1.name}</Text>
                <View style={styles.subTitle}>
                    <Text style={[styles.subTitleText, { color: data1.active ? colors.success : colors.failed }]}>{data1.active ? 'Active' : 'Inactive'}</Text>
                    <Text style={styles.subTitleText}>|</Text>
                    <Text style={styles.subTitleText}>{data1.launch_date_utc}</Text>
                </View>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.ProfileLink}>
                    <SvgXml xml={link} width="20" height="20" />
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => Linking.openURL(data1.wikipedia)}>
                        <Text style={styles.text}>{data1.wikipedia}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.RoadsterDetails}>
                    <Text style={styles.RoadsterDetailsText}>Roadster Details</Text>
                    <Text style={styles.RoadsterDetailsText1}>{data1.details}</Text>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Video</Text>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => Linking.openURL(data1.video)}>
                            <Text style={styles.text}>{data1.video}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Speed</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.speed_mph} mph</Text>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Distance</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.earth_distance_mi} mi</Text>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Orbit</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.orbit_type}</Text>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Launch Mass</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.launch_mass_kg} kg</Text>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Launch Date</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.launch_date_utc}</Text>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Launch Mass</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.launch_mass_kg} kg</Text>
                    </View>
                    <View style={styles.RoadsterDetails}>
                        <Text style={styles.RoadsterDetailsText}>Launch Mass</Text>
                        <Text style={styles.RoadsterDetailsText1}>{data1.launch_mass_kg} kg</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default RoadstarPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        paddingBottom: 70,
    },
    header: {
        height: 250,
        width: '100%',
        backgroundColor: colors.backgroundcolor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        borderWidth: 2,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        borderColor: colors.TabColor,
    },
    icon: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: colors.TabColor,
        borderRadius: 10,
        padding: 15,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginTop: -30,
        marginLeft: 20,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: colors.TabColor,
    },
    headerText: {
        marginTop: 10,
        marginLeft: 20,
    },
    headerText: {
        marginTop: 10,
        marginLeft: 20,
    },
    title: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.bigheading,
        fontFamily: fontfamily.fontRegular2,
        fontWeight: fontWeight.regular,
        lineHeight: 30,
        marginBottom: 5,
    },
    subTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subTitleText: {
        color: colors.IconStroke,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        lineHeight: 30,
        marginRight: 5,
    },
    scroll: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    ProfileLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: fontsize.paragraph,
        color: '#6FD4FF',
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    },
    RoadsterDetails: {
        marginTop: 20,
    },
    RoadsterDetailsText: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        lineHeight: 30,
        marginRight: 5,
    },
    RoadsterDetailsText1: {
        color: colors.IconStroke,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        lineHeight: 22,
        marginRight: 5,
    },

})