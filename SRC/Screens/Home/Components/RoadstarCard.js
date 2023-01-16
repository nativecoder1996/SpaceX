import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fontWeight, fontfamily, fontsize } from '../../../Constants'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Roadster } from '../../../Api';



const RoadstarCard = () => {
    const navigation = useNavigation();
    const [roadsterData, setRoadsterData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fecthRoadsterData();
    }, [])

    const fecthRoadsterData = async () => {
        const response = await Roadster();
        setRoadsterData(response);
        setLoading(false);
    }

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RoadstarPage', { item: roadsterData })}>
            <ImageBackground source={{ uri: roadsterData?.flickr_images[0] }} resizeMode='cover' style={{ width: '100%', height: '100%', borderRadius: 10, zIndex: -1 }}>
                <View style={styles.TextBox}>
                    <Text style={styles.Text}>{roadsterData?.name}</Text>
                    <Text numberOfLines={2} style={styles.Text1}>{roadsterData?.details}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default RoadstarCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '90%',
        height: 200,
        backgroundColor: colors.ViewInterviewBG,
        borderWidth: 1,
        borderColor: colors.IconStroke,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
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
    Text1: {
        width: '80%',
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.regular,
        marginLeft: 10,
        marginTop: 10,
    },

})